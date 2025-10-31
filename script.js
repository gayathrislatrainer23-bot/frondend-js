console.log("This is an external file " + 11)
console.log('This is an external file single quotes '  + 11)
console.log(1 + " " + 11)

// const  data = 1 + "5"
// console.log(data)
// console.log(typeof('g45%'))



// let apple = 76
// console.log(apple)
// let

// 28/10/2025
let orange = 90

// 28/10/2025

orange = 80
console.log(orange)

const nameOfShop = "Fruits shop"
//    nameOfShop = "shop Fruits"
console.log(nameOfShop, "name")

// var
var apple = 68;
var apple =90

 console.log(apple)
    // document.write("hello, external")  
    // document.write(apple)  
// var name = "Balu"
// var name = "Babu"


// let age = 23;
// age = 22
// const country = 'India';
// const state = " Tamilnadu"


// data type

let name = "Balu";
let age = 23;
let isStudent = true;
let isPassed = false;

// undefined
let city;
console.log("city:",city);
// let state = undefined
// console.log("state:",state);

let state = null
console.log("state:",state);

let typeOfState = typeof(state)
console.log(typeOfState);

// immutable  -- no editing
// let fruit = "Aple";
// fruit[2]= "p"  X

 let fruit = "Apple";
fruit = fruit + " good"
console.log("fruit:",fruit);
// console.log(fruit[0])
// Array

let colors = ["red", "green", 'blue']
// index-  0,1, 2,3
    
console.log(colors[0])
console.log(colors[1])
console.log(colors)

colors[0]= 'yellow'
console.log(colors)

// object

let students ={
    name : "Riyas",
    age  : 23,
    city : "vadachennai"

}
console.log(students.age)
students.age = 25
console.log(students.age)

// Arithmetic operators

// + --> addition

let num1 = 20;
let num2 = 40;
let sum  = num1+num2
// document.write(sum)
console.log(sum)
// - ---> subtraction
let sub  = num2-num1
console.log(sub)
// * ---> multiplication
let result = num1* num2
console.log(result)
// / ---> devision
let divResult =num2/num1
console.log(divResult)
// % ---> modulus 5%2  
let modulus = num2% num1
console.log(modulus)
// **  ---> Exponentiation 
let a =2
let b = 3
let expo = a**b
console.log(expo)



let c= null;
c= 10 || 9
console.log("c", c)
