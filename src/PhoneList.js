import React from "react";
import Phone from "./Phone";
import "./PhoneList.css";

function PhoneList({ contacts, deleteWithState, getContacts }) {
  return (
    <div className="phone-list">
      {contacts.map((contact, i) => {
        return (
          <div key={contact.phone}>
            <Phone
              contact={contact}
              deleteElementById={deleteWithState}
              getContacts={getContacts}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PhoneList;
