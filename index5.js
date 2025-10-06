function foo1(arr1,arr2){
let result = [];
for(let i = 0; i < arr1.length; i++){
    result.push(arr1[i]);
}
    for(let j = 0; j < arr2.length; j++){
    result.push(arr2[j]);
    }

return result;
}
let arr = [1,2];
let arr1 = [3,4];
console.log(foo1(arr, arr1))