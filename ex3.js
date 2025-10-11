function filterr(arr, fn){
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if (fn (arr[i], i, arr)){
            arr2.push(arr[i])
         
        }

    }
    return arr2;
}

function fn(element, index, arr){
    return element% 2 === 0;
}
var arr = [5,6,7,8,9,10]
console.log(filterr(arr,fn))