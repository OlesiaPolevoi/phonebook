import React from "react";
import "./Phone.css";

function Phone({ contact, deleteElementById }) {
  return (
    <div className="phone">
      <div>
        <p>
          {contact.name} {contact.lastname}
        </p>
      </div>
      <div>
        <h4> {contact.phone}</h4>
      </div>
      <div>
        <button
          className="button-delete"
          onClick={() => {
            console.log(contact);
            deleteElementById(contact.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Phone;
