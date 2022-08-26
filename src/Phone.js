import React from "react";
import "./Phone.css";
import Axios from "axios";

function Phone({ contact, getContacts }) {
  const deleteElement = (phone, callback) => {
    Axios.delete(
      `https://cag958z2q6.execute-api.us-east-1.amazonaws.com/${phone}`
    ).then(() => {
      callback();
    });
  };

  return (
    <div className="phone">
      <div>
        <p>
          {contact.firstName} {contact.lastName}
        </p>
      </div>
      <div>
        <h4> {contact.phone}</h4>
      </div>
      <div>
        <button
          className="button-delete"
          onClick={() => {
            deleteElement(contact.phone, getContacts);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Phone;
