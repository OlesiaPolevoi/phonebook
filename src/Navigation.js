import React from "react";
import "./Navigation.css";

function Navigation({ displayPhoneList, displayAddContacts }) {
  //кнопки - спиок телефонов и добавить телефон

  return (
    <div className="nav-buttons">
      <button
        className="contacts-button"
        onClick={() => {
          displayPhoneList();
        }}
      >
        Contacts
      </button>
      <button
        className="add-button"
        onClick={() => {
          displayAddContacts();
        }}
      >
        Add new
      </button>
    </div>
  );
}

export default Navigation;
