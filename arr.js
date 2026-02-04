let large = 0;
arr1 = [12,34,7,676,889]

function Largest(arr){
let large = 0;   
// 12,34,
let small =arr[0];
// 12
let secondSmall =arr[0]
// 12
    for(let i=0; i<arr.length;i++){
        if(arr[i]>large){
            large = arr[i]
        
        }
            if(arr[i]<small){
                secondSmall= small
            small = arr[i]

            
        } 
        if(arr[i]> small && arr[i]< secondSmall ){
           secondSmall = arr[i]
        }
    }
    return [large,small,secondSmall]
}
console.log(Largest(arr1))
