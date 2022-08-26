import React, { useState } from "react";
import "./AddContact.css";
import Axios from "axios";

function AddContact({ displayPhoneList }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = (firstName, lastName, phone, callback) => {
    Axios.post("https://cag958z2q6.execute-api.us-east-1.amazonaws.com/", {
      phone,
      firstName,
      lastName,
    }).then(() => {
      callback();
    });
  };

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
            addContact(firstName, lastName, phone, displayPhoneList);
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
