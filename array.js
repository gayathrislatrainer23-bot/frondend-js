let arr = [1,2,3,4]

let doubledArr = arr.map(num => num*2)
console.log('arr', arr)
console.log('doubledArr', doubledArr)

let evenNum = arr.filter((num)=> num % 2 === 0 )

console.log('evenNum', evenNum)

let name1 = "manu";

upperCasename = name1.toUpperCase()
let newName = name1.charAt(0)
console.log("upperCasename",upperCasename)
console.log("newName",newName)

let bigNum = arr.find(num => num >2)

console.log("bigNum",bigNum)

let fruits = ["Apple","Orange", "Mango"]

console.log(fruits.includes("Orange"))
console.log(fruits.includes("Kivi"))