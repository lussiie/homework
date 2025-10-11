function forEachh(arr,fn){
    for(let i = 0; i < arr.length; i++){
        fn(arr[i], i, arr)

    }

}
function fn(element,index,arr){
    console.log(element);
 
}
let arr = [10,20,30]
forEachh(arr,fn)