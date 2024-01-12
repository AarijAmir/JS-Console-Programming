// Factory Function
// function createPerson(name, age) {
//   return {
//     name,
//     age,
//     getCgpa: function () {
//       console.log("Good Cgpa" + name + "cgpa" + age);
//     },
//   };
// }

// const aarij = createPerson("Aarij Amir", 23);
// aarij.getCgpa();

// Constructor Function
// function ConstructorFunction(name, age) {
//   this.name = name;
//   this.age = age;
//   this.going = () => console.log("Person is Going");
// }
// function factoryFunction() {
//   return {};
// }
// const CreatingViaCaret = new Function(
//   "name,age",
//   ` this.name = name;
//     this.age = age;
//     this.record = function(){
//         console.log('Name: '+name+' Age:'+age);
//     }
// `
// );

// const jahil = new ConstructorFunction("Ali Raza", 24);
// const aarij = factoryFunction();
// const aashir = new CreatingViaCaret("Ahmed Ramzan", 25);

// console.log(student.constructor);

// console.log(Person.constructor);
// console.log(Person.constructor);
// console.log(student.constructor);
// aarij.going();
// aarij.schooling = "Very Good";
// delete aarij["schooling"];
// delete aarij["age"];
// delete aarij.name;

// for (let key in aarij) {
//   if (typeof aarij[key] == "function") {
//     aarij[key]();
//   } else {
//     console.log(aarij[key]);
//   }
// }

// let result = Object.keys(aarij);
// console.log(result);

// if ("going" in aarij) {
//   console.log("Going in Aarij is Present");
// } else {
//   console.log("Going in Aarij is not Present");
// }

// const list = [
//   { id: 36, name: "Aarij Amir" },
//   { id: 1, name: "Aashir Ahmed" },
// ];
// let index = list.findIndex((element) => element.id == 3);
// console.log(list[index]);
// const obj = { name: "Aarij Amir", cgpa: 3.65, rollNo: 36 };

// console.log(0.1 + 0.2 === 0.3);
// console.log(1.2 + 1.2 === 2.4);

// const { Readable } = require("stream");

// class NumberStream extends Readable {
//   constructor(options) {
//     super(options);
//     this.currentNumber = 1;
//   }

//   _read(size) {
//     if (this.currentNumber < 10) {
//       setInterval(() => {
//         const number = this.currentNumber++;
//         this.push(number.toString());
//       }, 2000);
//     } else {
//       return;
//     }
//   }
// }

// const numberStream = new NumberStream();

// numberStream.on("data", (chunk) => {
//   console.log(chunk.toString());
// });

// numberStream.on("end", () => {
//   console.log("Stream ended");
// });

// console.log("Pakistan Zindabad");

const { Readable, Writable } = require("stream");

// Readable Stream
class NumberStream extends Readable {
  constructor(options) {
    super(options);
    this.currentNumber = 1;
    this.xNumber = 10;
  }
  _read() {
    if (this.currentNumber > this.maxNumber) {
      this.push(null); // Signal the end of the stream
    } else {
      const number = this.currentNumber++;
      this.push(number.toString());
    }
  }
}

// Writable Stream
// class LoggerStream extends Writable {
//   _write(chunk, encoding, callback) {
//     console.log(chunk.toString());
//     callback();
//   }
// }
// class LoggerStreamTwo extends Writable {
//   _write(chunk, encoding, callback) {
//     console.log(chunk.toString());
//     callback();
//   }
// }

// const numberStream = new NumberStream();
// const loggerStream = new LoggerStream();
// const loggerStreamTwo = new LoggerStreamTwo();

// numberStream.pipe(loggerStream);
// numberStream.pipe(loggerStreamTwo);

// const courses = [
//   { id: 36, name: "Aarij Amir" },
//   { id: 1, name: "Zulqarnain Sabir" },
//   { id: 2, name: "Ameer Hamza" },
//   { id: 2, name: "Ameer Hamza" },
// ];
// const result = courses.find((obj) => {
//   return obj.id == 2 && obj.name == "Ameer Hamza";
// });
// const courses2 = [1, 2, 3, 4, 5];
// const value = courses2.find((val) => {
//   return val == 5;
// });
// console.log(value);
// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.push(55, 44, 56);
// numbers.unshift(23, 433);
// numbers.splice(2, 2, 299, 627, 692);
// console.log(numbers);

// let listOne = [{ name: "Aarij Amir" }, 36, 25];
// let listTwo = listOne.slice();
// listOne[0].name = "Ali Raza";
// listOne[1] = 33;
// console.log(listTwo);
// console.log(listOne);

function foos() {
  console.log("Foo is called from asynchronous_programming: " + 34);
}
function soos() {
  console.log("Soo is called from asynchronous_programming: " + 34);
}
module.exports.foos = foos;
module.exports.soos = soos;
