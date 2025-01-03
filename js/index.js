// 1
const users = [
    {name: "Artem", age: 20},
    {name: "Vitalik", age: 15},
    {name: "Oleksandr", age: 48}
];
const names = users.map(user => user.name);
console.log(names);

// 2

const people = [
    {name: "Artem", age: 20, eyeColor: "green"},
    {name: "Vitalik", age: 15, eyeColor: "blue"},
    {name: "Oleksandr", age: 48, eyeColor: "curry"}
];
const men = people.map(man => man.eyeColor);
console.log(men);

// 3

const folks = [
    {name: "Artem", age: 20, eyeColor: "green", gender: "man"},
    {name: "Vitalik", age: 15, eyeColor: "blue", gender: "man"},
    {name: "Katya", age: 48, eyeColor: "curry", gender: "woman"}
];
const person = folks.map(figure => figure.gender);
console.log(person);

// 4

const visitors = [
    {name: "Artem", age: 20, eyeColor: "green", gender: "man", isActive: "false"},
    {name: "Vitalik", age: 15, eyeColor: "blue", gender: "man", isActive: "false"},
    {name: "Katya", age: 48, eyeColor: "curry", gender: "woman", isActive: "false"}
];
const crowd = visitors.map(visitor => visitor.isActive);
console.log(crowd);

// 5

const vissitors = [
    {name: "Artem", age: 20, eyeColor: "green", gender: "man", isActive: "false", email: "Artem@ej.com"},
    {name: "Vitalik", age: 15, eyeColor: "blue", gender: "man", isActive: "false", email: "Vitalya_top@hm.com"},
    {name: "Katya", age: 48, eyeColor: "curry", gender: "woman", isActive: "false", email: "katya@gdjkshd.com"}
];
const reallEmail = "Vitalya_top@hm.com";
const emailReall = vissitors.find(vissitor => vissitor.email === reallEmail)
console.log(emailReall)

// 6

const vissittors = [
    {name: "Artem", age: 20, eyeColor: "green", gender: "man", isActive: "false", email: "Artem@ej.com"},
    {name: "Vitalik", age: 15, eyeColor: "blue", gender: "man", isActive: "false", email: "Vitalya_top@hm.com"},
    {name: "Katya", age: 48, eyeColor: "curry", gender: "woman", isActive: "false", email: "katya@gdjkshd.com"}
];
const vissittorsAge = (vissittors, min, max) => vissittors.filter(vissittor => vissittor.age >= min && vissittor.age <= max)
const min = 16
const max = 49
const vissittorsFilter = vissittorsAge(vissittors, min, max)
console.log(vissittorsFilter)