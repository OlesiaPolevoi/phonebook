// export let dataBase = [
//   { id: 1, name: "Nikita", lastname: "Polevoi", phone: "813-505-4550" },
//   {
//     id: 2,
//     name: "Olesia",
//     lastname: "Polevoioioioioi",
//     phone: "786-500-4550",
//   },
//   {
//     id: 3,
//     name: "Vanya",
//     lastname: "Turtigin",
//     phone: "813-505-4455",
//   },
//   {
//     id: 4,
//     name: "Alena",
//     lastname: "Turtigina",
//     phone: "813-555-4550",
//   },
// ];

// const addContact = (obj) => {
//   //функцию добавления элемента. На вход должен приниматься  объект. После добавления в справочник. Нужно отсартировать элементы по имени.

//   //создать айди равнй длинне масива + 1
//   let id = dataBase.length + 1;
//   const newObj = { id, ...obj };

//   //создать новый объект на основе входящих параметров и нового айди
//   //добавить его в бд

//   dataBase.push(newObj);
//   //обновить бд после соритровки
//   // //NOTE
//   // screenState === true;
//   dataBase = dataBase.sort((a, b) => {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });

//   // console.log(dataBase);
//   return dataBase;
// };

// const deleteElementById = (id) => {
//   const index = dataBase.findIndex((el) => {
//     return el.id === id;
//   });

//   dataBase.splice(index, 1);
//   return dataBase;

//   // const deleteContact = (id) => {
//   //   const newContacts = contacts.filter((contact) => contact.id !== id);
//   //   setContacts(newContacts);
//   // };
// };

// const searchElementByNumber = (num) => {
//   // функцию поиска эдемента по номеру телефона. Принимается на вход номер телефона. Возвращается объект из масива.
//   return dataBase.find((el) => {
//     return el.phone === num;
//   });
// };

// export { addContact, deleteElementById };
