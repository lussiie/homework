function mymapp(arr,fn){
 let arr1 = []
 for(let i = 0; i < arr.length; i++){
    arr1.push(fn(arr[i],i,arr))
 }
 return arr1;

}
function fn(element,index,arr){
    return element + index;
}
let arr = [30,20,10]
console.log(mymapp(arr, fn));