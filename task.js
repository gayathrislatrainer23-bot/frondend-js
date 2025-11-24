//  1. Print numbers from 1 to 10 using a for loop. 

// for(let i=1; i<=10;i++){
//     console.log(i)
// }

// 2. Print even numbers from 1 to 20. 

// for (let e = 1; e <= 20; e++) {
//     if(e % 2 === 0) {
//         console.log(e) }
// }

// 3. Print odd numbers from 1 to 15. 

// for (let e = 1; e <= 15; e++) {
//      if(e % 2 !== 0) {
//          console.log(e) }
//  }

//  4. Print numbers from 10 down to 1. 

// for (let k =10;k>=1;k--){
//     console.log(k)
// }

// 5. Find the sum of numbers from 1 to 5. 
// let sum=0;
// for(let i=1;i<=5;i++){
//     sum+=i;
// }
// console.log(sum)

// 6.Print the multiplication table of 5. 

// let i=5;
// for(let j=1;j<=10;j++){

//     console.log(`${j} x ${i}= ${ i*j}`)
// }
// // 1*2=2
// 2*2=4

// function multiplication(num){
// for(let j=1;j<=10;j++){

//     console.log(`${j} x ${num}= ${ num*j}`)
// }
// }
// multiplication(2)
// multiplication(20)

// 7. Print all numbers from 1 to 50 that are divisible by 5.

// for(let i = 1; i <= 50; i ++){
// if(i % 5 == 0){
//     console.log(i)
// }
// }

// eg:.Print the Addition table of 5. 
// let num = 5
// for(let i=1; i <= 10; i++){
//     console.log(i,"+",num,"=",i + num)
// }
// function addition(num){
//     for(i=1;i<=10;i++){

//     console.log(`${i}+${num}=${i+num}`)
// }
// }
// addition(5)

// 8.Print the square of numbers from 1 to 10.


// for (let s = 1; s <=10; s++) {
// console.log(`Square of ${s} is ${s*s}`)
// }

// 9 Print all numbers between 1 and 30 that are divisible by both 2 and 3. 

// for (let i = 1; i <=30; i++){
//     if (i % 2 === 0 && i % 3 === 0){
//         console.log("Numbers divided by 2 and 3: ", i)
//     }
// }

// 10  Find the factorial of 5 using a loop. 

// let fact=1
// let n=5
// for(i=1;i<=n;i++){
//     fact*=i
//     console.log(fact)
// }
// console.log("Factorial of",n,"is",fact)

// function factorial(num){
//     let factorial = 1;
//     if(num === 0){
//         return 1
//     }
// for(let i = num;i> 0;i-- ){
//  factorial *= i
// }
// return factorial

// }
// console.log("factorial of 1",factorial(1))
// console.log("factorial of 0",factorial(0))
// console.log("factorial of 5",factorial(5))

// function factorialRec(n){
//     if (n === 0 || n === 1){
//         return 1
//     }
//     return n * factorialRec(n-1)
// }

// console.log(factorialRec(3))

// factorialRec(3) --> 3*factorialRec(3-1) --> 3*factorialRec(2) --> 3*2*factorialRec(1) --->3*2*1 =6


// object

// 1. Create an object student with name, age, and grade. Print all values.

let student = {
    name: "Bramma",
    age: 23,
    grade: "A",
}
console.log(student.name, student.age, student.grade)




// 2. Create an object car with brand, model, year. Print only the brand.


let car={
    brand:"Toyato",
    model:"Innova",
    year:2012
}
console.log(car.brand)
// 3. Create an object mobile with 3 properties and add one new property later.
let mobile={
     frontcamera:48,
     fingerprint:"in display",
     rom:64
    
}
mobile.brand="samsung"
console.log(mobile)

// 4. Create a book object and change its price property to a new value.
let book ={
    name:"The money",
    price:200,
}
book.price=250
console.log(book.price)
// 5. Create an object employee and check if the key "salary" exists using in operator.
let employee ={
    name:"riyas",
    position :"manager",
    domain : "IT",
    salary : "8lpa"
}
if(employee.salary){
    console.log("Riyas recived his key  salary 8LPA 'salary'")
}
else{
   console.log("key 'salary' is not recived")
}
console.log("salary" in employee ? "Riyas recived his  salary 8LPA ": "not recived")

// 6. Create an object product and delete the discount property using delete.

let product = {
    name: "shoes",
    amount: 4000,
    discount: 1000,
}

delete product.discount

console.log(product)

// 7. Create an object user with name and email. Print all keys using for…in loop.

let user={
    name:"Bharath",
    email:"bharath552@gmail.com"
}

for(let x in user){
    console.log(user[x])
}
// 8. Create an object dog with breed and age. Print "Puppy" if age < 2.
let  dog={
    breed:"dober",
    age:1.5
}
if(dog.age<2){
    console.log("puppy")
}
else{
    console.log("dog")
}


// 9. Create an object calculator with two numbers and print their sum.
let calculator={
    a:22,
    b:30,
    sum:function(){
    return    this.a + this.b
    }
}
console.log(calculator.sum())
// console.log(calculator.a+calculator.b)

// 10. Create an object person with firstName and lastName. Print full name.

let person ={
    firstName : "Raj", 
    lastName:"GopalaaaaaSwamy"
}
console.log(`${person.firstName} ${person.lastName}`)

// 11. Create an object marks with 5 subject marks. Find the total using loop.
let marks = {
    math: 85,
    science: 90,
    english: 78,
    history: 88,
    art: 92
};
let total = 0;
for (let subject in marks) {

    total += marks[subject]
}
console.log(total)


// 1. Synchronous Js

console.log('A')
console.log('B')
console.log('C')

// setTimeout(()=>{
//     console.log("hello I am here")
// },20000)
console.log('E')
console.log('F')
console.log('G')

// setInterval(()=>{
//     console.log("hello I am shows every 2s")
// },2000)
console.log('H')
console.log('I')
console.log('J')

let count =0;
// const id = setInterval(()=>{
//     console.log("running....")
//     count++;
//     if(count === 5){
//         clearInterval(id)
//     }
// },2000)
// alert("loading")
// const id2 = setInterval(()=>{
//     count++;
//     alert("loading")
// if(count === 3){
//         clearInterval(id2)
//     }
// },2000)


//  const getName =() =>{
// return username= "Balu"
//  }
// const greeting = async function (){

//    let  name =  await getName ()
//    console.log(name)


// }

// greeting()

// Destructuring

let  kid ={
name: "Ramu",
age :3,
subject:{
subName: "Maths"
}
}


const findKidDetails = (child)=>{

let {name, age, subject} = child
 let {subName} =subject
console.log(name ,"name")
console.log(age)
console.log(subject)
console.log(subName)

}
// findKidDetails(kid)
const numbers =[10,20,30]

let[a,b,c] =numbers
console.log(a)

// spread and rest operator (...)

let arr1 = [1,2,3]
let arr2 = [11,12,13]
// [[1,2,3],[11,12,13]]
let  arr3 =[...arr1, ...arr2,23,44]
// mergging arrays
let arr4 = [...arr3]
console.log(arr3)
console.log(arr4)
object1 = {
    a: "",
    b: ""
}
object2 = {
    a1: "",
    b1: ""
}
let  object3 ={...object1,...object2}
console.log(object3)
// spread  --> break the array /object into individual elements
// rest  --->collect the remaining value

const [first,...rest] =[1,345,456,67,345];
// let reversedArr1 =arr1.reverse()
// console.log(reversedArr1)

Lastarr2 = arr2[arr2.length-1]
let sum1 = 0;
function sum(...nums){
// console.log(nums)
for(let num of nums ){

    sum1 += num
}
return sum1
}
console.log(sum(1,2,3))

// callBack

function fetchData(callBack){

    callBack("haii, how are you")
}

function message (msg){
console.log(msg)
}
// message("hjgsdiyf")
fetchData(message)

// function download (){
// console.log("downloading...")
// }

// function potoClick (callBack){
//    callBack()

// }
// potoClick(download)

function just(r){
    console.log("just for fun",r)
}
 
 just(2)
 just(21)
 just(22)

 let promise = new Promise((resolve,reject)=>{
let sucess =false;
if(sucess){
    resolve("sucess")
}else{
    reject("not sucess")
}
 })
promise.then((msg)=>console.log(msg))
       .catch((err)=>console.log(err))



// function download (){
// console.log("downloading...")
// }

async function potoClick (){
   await function callBack (){

   }

}
potoClick(download)