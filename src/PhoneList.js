import React, { useState } from "react";
import { dataBase } from "./DataBase";
import Phone from "./Phone";
import "./PhoneList.css";

function PhoneList() {
  //Создать компониент "список", который должен появляться если пользователь нажал кнопку список
  const [contacts, setContacts] = useState(dataBase);

  return (
    <div className="phone-list">
      {contacts.map((contact, i) => {
        return (
          <div key={i}>
            <Phone contact={contact} />
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
