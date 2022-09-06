let personName = "To'lqin";
let personSurname = "Bobomirzayev";
let personAge = 21;
let personAddress = "Yangiyo'l";
let personIsMerried = false;

let person = {
  name: "To'lqin",
  surname: "Bobomirzayev",
  age: 21,
  address: "Yangiyo'l",
  isMerried: false,
  family: {
    father: "ism1",
    mother: "ism2",
    brother: "ism3",
  },
  cars: ["Ferrari", "BMW", "Malibu"]
}

// console.log(person);

person.surname
person['name']

function addPerson(name, surname, telepone, nima) {
  let personInfo = {
    ism: name,
    familiya: surname,
    raqam: telepone,
  }

  return personInfo;
}

let info = addPerson("Ali", "Valiyev", "987")

// console.log(info);

let people = [
  {
    name: "To'lqin",
    surname: "Bobomirzayev",
    age: 21,
    address: "Yangiyo'l",
    isMerried: false,
  },
  {
    name: "Ali",
    surname: "Ali",
    age: 21,
    address: "Yangiyo'l",
    isMerried: false,
  },
  {
    name: "Vali",
    surname: "Vali",
    age: 21,
    address: "Yangiyo'l",
    isMerried: false,
  },
]

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name, people[i].surname,  people[i].age,  people[i].isMerried);
}