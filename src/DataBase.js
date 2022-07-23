export const dataBase = [
  {
    name: "Nikita",
    lastname: "Polevoi",
    phone: 8135054550,
  },
  {
    name: "Olesia",
    lastname: "Polevoioioioioi",
    phone: 7865004550,
  },
  {
    name: "Vanya",
    lastname: "Turtigin",
    phone: 8135054455,
  },
  {
    name: "Alena",
    lastname: "Turtigina",
    phone: 8135554550,
  },
];

const addElement = (obj) => {
  //функцию добавления элемента. На вход должен приниматься  объект. После добавления в справочник. Нужно отсартировать элементы по имени.
  dataBase.push(obj);

  const sorted = dataBase.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return sorted;
};

const deleteElementByNumber = (num) => {
  // функцию удаления телефон по номеру телефона
  const index = dataBase.findIndex((el) => el.phone === num);
  dataBase.splice(index, 1);
  return dataBase;
};

const searchElementByNumber = (num) => {
  // функцию поиска эдемента по номеру телефона. Принимается на вход номер телефона. Возвращается объект из масива.
  return dataBase.find((el) => {
    return el.phone === num;
  });
};
