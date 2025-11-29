// let arr = [1,2,3,4]

// let doubledArr = arr.map(num => num*2)
// console.log('arr', arr)
// console.log('doubledArr', doubledArr)

// let evenNum = arr.filter((num)=> num % 2 === 0 )

// console.log('evenNum', evenNum)

// let name1 = "manu";

// upperCasename = name1.toUpperCase()
// let newName = name1.charAt(0)
// console.log("upperCasename",upperCasename)
// console.log("newName",newName)

// let bigNum = arr.find(num => num >2)

// console.log("bigNum",bigNum)

// let fruits = ["Apple","Orange", "Mango"]

// console.log(fruits.includes("Orange"))
// console.log(fruits.includes("Kivi"))


let arr = [1,2,3,4,5]
// arr.splice(startIndex,deleteeCount,itemadd,)
arr.splice(1,2)
console.log(arr)

let arr1 = [23,34,56,78]
arr1.splice(2,1,"68",'hgh','vgfy','cgft')
console.log(arr1)
let arr3 = [100,300,400,500]
arr3.splice(1,0,200)

console.log(arr3)

// 1.Given the array [1, 2, 4, 5], insert the number 3 between 4 and 5.
//2. Remove the third element from the array [10, 20, 30, 40, 50].
// 3.Replace the second element in the array [5, 10, 15] with 20.


// 7.Replace all occurrences of 5 with 50 in the array [5, 10, 5, 20, 5].
let arr7 = [5, 10, 5, 20, 5];
 
let ansArr7 = arr7.map(num => (num === 5 ? 50 :num))
console.log(ansArr7);

arr10 = [1,2,3,45,67]

for ( i in arr10){

if(arr10[i] === 1 && 2){
    arr10.splice(i,1)
}

arr10.push(23,34)
 
}
console.log(arr10)
let arr11 = ["A",'B','C']

// let index=arr11.map((Alphabet,i)=>{
// if(Alphabet === 'B' ){
//     return i
// }
// }
// )
function  indexFind(arr,alphabet){
    for ( i in arr){
    if(arr[i] === alphabet ){
        return i
    }
    }
}
console.log('haii')
console.log(indexFind(arr11, 'B'))


let arr13 = [123,34,345,76]

let sum =  arr13.reduce((total,elemet)=>
    total + elemet
,2)
console.log(sum)

let arr23  = [1,25,31,4]

arr23.sort((a,b)=>a-b)

arr23.sort((a,b)=>b-a)
console.log(arr23 )

//8 Given the array [3, 6, 9, 12, 15], insert 0 at index 2.

// 9.Remove all even numbers from the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
// 10.Given the array [5, 10, 20, 30], insert 15 between 10 and 20.