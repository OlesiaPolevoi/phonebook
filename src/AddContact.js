import React, { useState } from "react";
import "./AddContact.css";

function AddContact({ addContact, displayPhoneList }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="add-contact">
      <h1> Add Contact</h1>
      <div className="form">
        <input
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          value={firstName}
          type="text"
          placeholder="First name"
        ></input>
        <input
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          value={lastName}
          type="text"
          placeholder="Last name"
        ></input>
        <input
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          value={phone}
          placeholder="123-456-7890"
          type="tel"
          id="phone"
          name="phone"
        ></input>
        <button
          onClick={() => {
            addContact({ name: firstName, lastname: lastName, phone: phone });
            //change page
            displayPhoneList();
          }}
          className="button-add"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddContact;
