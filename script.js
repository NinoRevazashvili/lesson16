// 1
let number = [5, 10, 15, 20, 25];
let sum= 5+10+15+20+25
console.log(sum)


// 2
let students = [
    {
      name: "Nino",
      age: 22,
      address:"Tbilisi"

},
{
    name: "Sali",
    age: 42,
    address:"Batumi"

},
{
    name: "Teo",
    age: 32,
    address:"Gori"

},

];
console.log(students[0], students[1], students[2]);

// 3
console.log(`My name is ${students[0].name} and I am ${students[0].age} years old and My address is ${students[0].address}`);

// 4
if (students[1].age<19) {
    console.log("I am teenager");
  } else if (students[1].age>19) {
    console.log("I am an adult");
  }

// 5  
let numbersArr = [1, 2, 3, 4, 5, 6,];

for (let i = 0; i < 6; i++) {
  console.log(i);
}
