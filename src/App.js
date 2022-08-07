import React, { useState } from "react";
import "./App.css";
import { addContact, deleteElementById } from "./DataBase";
import Navigation from "./Navigation";
import PhoneList from "./PhoneList";
import AddContact from "./AddContact";

function App() {
  const [screenState, setScreenState] = useState("phoneList"); //"phoneList" or "addContact"

  //создать функцию - открыть лист контактов при вызове которой засетим нужный стэйт
  const displayPhoneList = () => {
    setScreenState("phoneList");
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
            <PhoneList deleteElementById={deleteElementById} />
          )}
        </div>

        {screenState === "addContact" && (
          <AddContact
            addContact={addContact}
            displayPhoneList={displayPhoneList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
