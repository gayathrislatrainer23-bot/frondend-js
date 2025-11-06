

let age = 8;
//  1.
  if(age >= 18){
    console.log(" you can vote..")
  }

// 2. 

  if(age >= 18){
    console.log(" you can vote..")
  }else{
      console.log(" you can't vote..")
  }

  // 3. 
  let  marks = 35;
  
  if(marks <=100 && marks >= 90){
    console.log("Grade A")
  }else if(marks >= 80){
  console.log("Grade B")
  }else if(marks >= 70){
  console.log("Grade C")
  }else{
      console.log("Grade D, you are failed")
  }

//   4.

let userName = "admin";
let password = "123"

  if(userName === 'admin'){
if(password === 123){
    console.log("you are loggedin")
}
  }

// <!-- ternary operator -->

// age >= 18 ?  console.log(" you can vote..") : console.log(" you can't vote..")

// <!-- && operator -->
age >= 18  &&  console.log(" you can vote..");

// 1. task

let num = 10
if(num % 2 == 0){
console.log("this number is even number")
}else{
   console.log("this number is even number") 
}
console.log(`${num} number is even number`)

// 2. task

// 1. Child
// 2. teenager
// 3. adult
// 4. senior citizen

// switch
// let day = 5
// let dayName = null
// console.log(dayName)
// switch(day){
//   case 1:
// dayName = "Monday"
//  break;
//     case 2:
//    dayName = "Tuesday"
//     break;
//   case 3:
// dayName = "Wednesday"
//      break;
//     case 4:
// dayName = "Thursday"
//  break;
//   case 5:
//    dayName = "Friday"
//     break;
//     case 6:
// dayName = "Saturday"
//  break;
//     case 7:
//      dayName = "Sunday"
//       break;
//       default:
//         console.log(" you entered wrong")
// }

// console.log(dayName)
// console.log(typeof(dayName))
// for loop
// for(let i = 0; i<4;i++){
//     console.log(i)
// }

// for (let i = 1; i <= 15; i += 2) {
//   console.log(i);
// }

// let i = 12
// while(i>1){
// console.log(i)
//     i--;
// }
// for(let i = 12; i>1;i--){
//     console.log(i)
// }

 let bigNum = "123456"
//  lengthof  bigNum =  bigNum.length
 //find the digit of this number

// let count = 0;
// for(let i=1; i<=bigNum.length; i++){
// count++;
// }
// console.log("count",count)

  // sum of first 5 number 
let sum= 0;
for(let i=1; i<=5; i++){
sum += i
}
console.log(sum)
let num1 =0
do{
 console.log("num1",num1)
 num1++
}while(num1<2)

  function Greetings(){
    console.log("haii")
}