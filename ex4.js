function somee(arr,fn){
for(let i = 0; i < arr.length; i++){
 if(fn(arr[i], i, arr)){
    return true;
 }
}
return false;
}
function fn(element, index, arr){
    return element <= index;
}
let arr = [10,2,0,-3]
console.log(somee(arr,fn))