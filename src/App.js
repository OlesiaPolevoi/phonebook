import React, { useState, useEffect } from "react";
import "./App.css";

import Navigation from "./Navigation";
import PhoneList from "./PhoneList";
import AddContact from "./AddContact";
import Axios from "axios";

function App() {
  const [screenState, setScreenState] = useState("phoneList"); //"phoneList" or "addContact"
  const [contacts, setContacts] = useState([]);

  const getContacts = () => {
    Axios.get("https://cag958z2q6.execute-api.us-east-1.amazonaws.com/").then(
      (response) => {
        console.log(response);
        setContacts(response?.data?.items ?? []);
      }
    );
  };

  useEffect(() => {
    getContacts();
  }, []);

  const displayPhoneList = () => {
    setScreenState("phoneList");
    getContacts();
  };

  const displayAddContacts = () => {
    setScreenState("addContact");
  };
  return (
    <div className="container">
      <h1 className="header">PhoneBook</h1>
      <div>
        <div className="navigation">
          <Navigation
            displayPhoneList={displayPhoneList}
            displayAddContacts={displayAddContacts}
          />{" "}
        </div>

        <div className="phone-list">
          {screenState === "phoneList" && (
            <PhoneList contacts={contacts} getContacts={getContacts} />
          )}
        </div>

        {screenState === "addContact" && (
          <AddContact displayPhoneList={displayPhoneList} />
        )}
      </div>
    </div>
  );
}

export default App;
