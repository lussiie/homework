function foo(arr,target){
   
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j< arr.length; j++){
           if(arr[i]+ arr[j] === target){
              return [i, j];
            }      
        }
    }
    return [-1, -1];
} 

let target = 8;
let arr  = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(foo(arr, target));