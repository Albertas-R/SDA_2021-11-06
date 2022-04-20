// function myFunc() {
//   var name = prompt("Hi, what is your name?");
//   var newEl = document.createElement("div");
//   newEl.innerText = "Hello, " + name;
//   var body = document.getElementById("name");
//   body.appendChild(newEl);
// }

// var age1 = myFunc();
// var age2 = myFunc();
// var age3 = myFunc();

// console.log(age1, age2, age3);

// ---------------------------
// Užduotis 1
// ---------------------------
// function myFunctionSum(a, b) {
//   sum = a + b;
//   return sum;
// }

// function myFunctionMin(a, b) {
//   min = a - b;
//   return min;
// }

// function myFunctionDaug(a, b) {
//   daug = a * b;
//   return daug;
// }

// function myFunctionDal(a, b) {
//   dal = a / b;
//   return dal;
// }

// var mySum = myFunctionSum(1, 2);
// var myMin = myFunctionMin(4, 3);
// var myDaug = myFunctionDaug(2, 2);
// var myDal = myFunctionDal(8, 2);

// console.log(mySum, myMin, myDaug, myDal);
// console.log(mySum);
// console.log(myMin);
// console.log(myDaug);
// console.log(myDal);

// ---------------------------
// Užduotis 2
// sprendimas 45 min.
// ---------------------------
// function a(x) {
//   return x * 2;
// }

// function b(x) {
//   return a(x) * a(x - 2);
// }

// var z = b(4);
// console.log(z);

// ---------------------------
// Užduotis 3
// ---------------------------
// for (var i = 0; i <= 100; i = i + 3) {
//   console.log(i);
//   document.writeln(i);
// }

// ---------------------------
// Užduotis 4
// ---------------------------
// var arr1 = ["Petras", "Juozas", "Marija", "Onute"];

// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);

// for (var i = 0; i < arr1.length; i = i + 1) {
//   console.log(i);
//   console.log(arr1[i]);
// }

// ---------------------------
// ANTRA DALIS PO PERTRAUKOS 12:40
// ---------------------------

// var nickName = prompt("What is your nickname?");

// while (nickName.length < 3) {
//   alert("Sorry your Nickname too short!");
//   nickName = prompt("What is your nickname?");
// }

// console.log(nickName);

// ---------------------------
// Užduotis 5
// ---------------------------

var masyvas = [];
for (var i = 0; i < 1000; i = i + 7) {
  masyvas.push(i);
}
console.log(masyvas);

// Algirdo pvz:
var arr1 = [
  "Petras",
  "Juozas",
  "Marija",
  "Onute",
  "Petras",
  "Juozas",
  "Marija",
  "Onute",
  "Petras",
  "Juozas",
  "Marija",
  "Onute",
  "Petras",
  "Juozas",
  "Marija",
  "Onute",
  "Petras",
  "Juozas",
  "Marija",
  "Onute",
  "Petras",
  "Juozas",
  "Marija",
  "Onute",
];

function genderSeparator() {
  var male = [];
  var female = [];

  for (var i = 0; i < arr1.length; i++) {
    var currentElement = arr1[i];
    if (currentElement.endsWith("s")) {
      male.push(currentElement);
    } else {
      female.push(currentElement);
    }
  }
  console.log(male);
  console.log(female);
}
genderSeparator();
