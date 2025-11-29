// 1. Create an array with 5 fruits and print it. 

let arr1 = ['Apple', 'Orange', 'Kiwi']
console.log(arr1)

for (fruit of arr1){
    console.log(fruit)
}
let update =arr1.map((e, i)=>{
    if(e === 'Kiwi'){

        return 'Mango'
    }
    return e;
// console.log(e, i)
})
console.log(update)

// 2. Print the first and last element of an array.

let arr2  = ['veggi', ' fruit', 'egg', ' meat']

console.log("first element:", arr2[0])
console.log("last element:", arr2[arr2.length - 1])

// 3. Find the length of an array.

let arr3 = ['Riyas','Nirmal','Sanjay','Bramma','Vishva','Bharath','Poornima','Lakshya']

console.log("length of The Array :",arr3.length)

// 14. Find the sum of numbers in an array.
let arr4=[1,2,3,4,5]
let sum=0
for(let i=0;i<arr4.length;i++){
    if(i%2!==0){
        console.log("Odd number is:",i)
    }
     else if(i%2===0){
        console.log("Even number is:",i)
    }
    sum+=arr4[i]
}
console.log("The sum is:",sum)

// 13. Use forEach() to print each item with its index.
let nums = [10,20,40.5,34.5]
nums.forEach((num,index)=>{
console.log(num,index)
})

console.log(nums.reverse())
