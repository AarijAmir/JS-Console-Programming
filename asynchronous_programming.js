// const { foos, soos } = require("./js-oop");

// let a = 20;
// function soo() {
//   let b = 30;
//   return [
//     () => {
//       a++;
//       b++;
//       console.log(a);
//       console.log(b);
//       foos("Hello Goo");
//     },
//     () => {
//       a++;
//       b++;
//       console.log(a);
//       console.log(b);
//       soos("Hello Too");
//     },
//   ];
// }

// const soo1 = soo();
// soo1[0]();
// soo1[1]();

// "use strict";
// const _privateMethod = Symbol();
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//     function soo() {}
//   }

//   static [_privateMethod]() {
//     // Private static method logic
//     console.log("Static Private Method");
//   }

//   [_privateMethod]() {
//     // Private method logic
//     console.log("Private Method");
//   }

//   publicMethod() {
//     // Calling the private method within the class
//     this[_privateMethod]();
//     Circle[_privateMethod]();
//     Circle.publicMethod();
//     console.log("Calling private method inside public method");
//   }
// }

// const circle = new Circle(3.65);
// const result = Object.getOwnPropertyNames(circle);
// console.log(result);

// "use strict";
// const _cgpa = new WeakMap();
// const _getInfo = new WeakMap();
// class Student {
//   constructor(rollNo, name) {
//     this.name = name;
//     this.rollNo = rollNo;
//     _cgpa.set(this, 3.65);
//     _getInfo.set(this, () => {
//       console.log(
//         "Name is: " +
//           this.name +
//           " RollNo is: " +
//           this.rollNo +
//           " Cgpa is: " +
//           _cgpa.get(this)
//       );
//     });
//     this.info = () => {
//       _getInfo.get(this)();
//     };
//   }
//   info() {
//     _getInfo.get(this)();
//   }
//   set rollNoi(rollNo) {
//     if (rollNo > 0) this.rollNo = rollNo;
//   }
//   get rollNoi() {
//     return this.rollNo;
//   }
// }
// const std = new Student(36, "Aarij Amir");

// std.info();
// console.log(std.rollNoi);

// function soo() {
//   let count = 20;
//   return [
//     () => {
//       count++;
//       return count;
//     },
//     () => {
//       count++;
//       return count;
//     },
//   ];
// }
// const func = soo();
// console.log(func[0]());
// console.log(func[1]());

// function Student(rollNo, name) {
//   this.name = name;
//   this.rollNo = rollNo;
//   let grades = [86, 86, 78, 77, 70, 83];
//   this.printGrades = () => {
//     grades.map(
//       function (grade) {
//         console.log(this, grade);
//       }.bind(this)
//     );
//   };
// }

// const std = new Student(36, "Aarij Amir");

// console.log("1. Start");

// setTimeout(() => {
//   console.log("4. Macrotask (setTimeout)");

//   Promise.resolve("Promise result").then((result) =>
//     console.log("5. Microtask (then):", result)
//   );
// }, 5000);
// setTimeout(() => {
//   console.log("Pakistan");
// }, 2000);

// console.log("2. End");

let 

