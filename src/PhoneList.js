import React, { useState } from "react";
import { dataBase } from "./DataBase";
import Phone from "./Phone";
import "./PhoneList.css";

function PhoneList({ deleteElementById }) {
  //Создать компониент "список", который должен появляться если пользователь нажал кнопку список
  const [contacts, setContacts] = useState(dataBase);

  const deleteWithState = (id) => {
    const newContactList = deleteElementById(id);
    setContacts([...newContactList]);
  };

  // useEffect(() => {
  //   setContacts(dataBase);
  // }, [dataBase]);

  // const deleteContact = (id) => {
  //   const newContacts = contacts.filter((contact) => contact.id !== id);
  //   setContacts(newContacts);
  // };
  return (
    <div className="phone-list">
      {contacts.map((contact, i) => {
        return (
          <div key={contact.id}>
            <Phone contact={contact} deleteElementById={deleteWithState} />
          </div>
        );
      })}
    </div>
  );
}

export default PhoneList;

// return (
//   <div className="TrackList">
//     {tracks.map((track) => {
//       return (
//         <Track
//           track={track}
//           key={track.id}
//           onAdd={onAdd}
//           onRemove={onRemove}
//           isRemoval={isRemoval}
//         />
//       );
//     })}
//   </div>
// );
