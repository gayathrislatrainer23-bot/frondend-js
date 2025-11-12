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

function multiplication(num){
for(let j=1;j<=10;j++){

    console.log(`${j} x ${num}= ${ num*j}`)
}
}
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

for (let i = 1; i <=30; i++){
    if (i % 2 === 0 && i % 3 === 0){
        console.log("Numbers divided by 2 and 3: ", i)
    }
}

// 10  Find the factorial of 5 using a loop. 

let fact=1
let n=5
for(i=1;i<=n;i++){
    fact*=i
    console.log(fact)
}
console.log("Factorial of",n,"is",fact)

function factorial(num){
    let factorial = 1;
    if(num === 0){
        return 1
    }
for(let i = num;i> 0;i-- ){
 factorial *= i
}
return factorial

}
// console.log("factorial of 1",factorial(1))
// console.log("factorial of 0",factorial(0))
// console.log("factorial of 5",factorial(5))

function factorialRec(n){
    if (n === 0 || n === 1){
        return 1
    }
    return n * factorialRec(n-1)
}
console.log(factorialRec(5))