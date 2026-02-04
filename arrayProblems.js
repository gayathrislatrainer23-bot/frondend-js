// // 1. Create an array with 5 fruits and print it. 

// let arr1 = ['Apple', 'Orange', 'Kiwi']
// console.log(arr1)

// for (fruit of arr1){
//     console.log(fruit)
// }
// let update =arr1.map((e, i)=>{
//     if(e === 'Kiwi'){

//         return 'Mango'
//     }
//     return e;
// // console.log(e, i)
// })
// console.log(update)

// // 2. Print the first and last element of an array.

// let arr2  = ['veggi', ' fruit', 'egg', ' meat']

// console.log("first element:", arr2[0])
// console.log("last element:", arr2[arr2.length - 1])

// // 3. Find the length of an array.

// let arr3 = ['Riyas','Nirmal','Sanjay','Bramma','Vishva','Bharath','Poornima','Lakshya']

// console.log("length of The Array :",arr3.length)

// // 14. Find the sum of numbers in an array.
// let arr4=[1,2,3,4,5]
// let sum=0
// for(let i=0;i<arr4.length;i++){
//     if(i%2!==0){
//         console.log("Odd number is:",i)
//     }
//      else if(i%2===0){
//         console.log("Even number is:",i)
//     }
//     sum+=arr4[i]
// }
// console.log("The sum is:",sum)

// // 13. Use forEach() to print each item with its index.
// let nums = [10,20,40.5,34.5]
// nums.forEach((num,index)=>{
// console.log(num,index)
// })

// console.log(nums.reverse())

// 1.move all 6 to the end of array
let newarr= [2,4,6,7,8,6,6,4,7,3]
let target = 6
// loop
// arr1[0] = 2

for ( let i=newarr.length-1 ; i>0; i--){
    console.log('hai')
for ( let j=0; j< i;j++){

if( newarr[j] === 6  && newarr[j+1] !== 6){
// newarr[j] == newarr[j+1]
let temp 
temp=newarr[j]
console.log(temp, 'temp')
newarr[j] = newarr[j+1]
newarr[j+1]= temp

}
}
console.log('array',newarr)
}
console.log('arr',newarr)

// even ,odd   seperate 

let arr6 = [3,4,2,5,8,9,10]
let evenArr=[];
let oddArr=[];
for(let i=0; i<arr6.length;i++){

    if(arr6[i]% 2 === 0){
    evenArr[evenArr.length] =arr6[i]
    }else{
        //  oddArr[0]=arr6[i]
         oddArr[oddArr.length] =arr6[i]
    }
}
console.log(evenArr)
console.log(oddArr)

// smallest Number , function return smallest element

// task

// 1.Given the array [1, 2, 4, 5], insert the number 3 between 4 and 5.

//2. Remove the third element from the array [10, 20, 30, 40, 50].

// 3.Replace the second element in the array [5, 10, 15] with 20.

//4. Add the elements 7 and 8 at the end of the array [1, 2, 3, 4, 5].

// 5.Insert the element 99 at the beginning of the array [10, 20, 30].

// 6Remove the last element from the array [2, 4, 6, 8, 10].

// 7.Replace all occurrences of 5 with 50 in the array [5, 10, 5, 20, 5].

//8 Given the array [3, 6, 9, 12, 15], insert 0 at index 2.

// 9.Remove all even numbers from the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

// 10.Given the array [5, 10, 20, 30], insert 15 between 10 and 20.

// 11.Remove the element at index 3 from the array [100, 200, 300, 400, 500].

//12. Replace the last element in the array [1, 2, 3, 4, 5] with 10.

// 13.Add the elements 8, 9, and 10 at the beginning of the array [1, 2, 3, 4, 5].

//14. Remove the first occurrence of 7 from the array [7, 14, 21, 7, 28].

// Insert the elements 25 and 30 at the end of the array [10, 20].

// 16.Replace all occurrences of 0 with 1 in the array [0, 1, 0, 1, 0].

// 17.Given the array [5, 10, 15, 20, 25], insert 12 between 10 and 15.

// 18.Remove the second-to-last element from the array [2, 4, 6, 8, 10].

// 19.Replace the element at index 1 in the array [3, 6, 9] with 12.

//20. Add the elements 100 and 200 at the beginning of the array [300, 400, 500].

//21. Remove all occurrences of 42 from the array [42, 42, 42, 42, 42].

// 22.Insert the element 7 at the end of the array [1, 2, 3, 4, 5, 6].

// Replace the last occurrence of 8 with 80 in the array [8, 16, 24, 8, 32].

// Given the array [2, 4, 6, 8, 10], insert 5 between 4 and 6.

//25. Remove all elements from the array [11, 22, 33, 44, 55].

// 26.Replace the first element in the array [7, 14, 21] with 10.

// 27.Add the elements 1 and 2 at the end of the array [3, 4, 5].

// 28.Remove the element at index 0 from the array [50, 40, 30, 20, 10].

// 29.Replace all occurrences of 6 with 60 in the array [6, 12, 18, 6, 30].

// 30.Given the array [3, 6, 9, 12, 15], insert 7 at index 3.
