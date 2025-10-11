function everyy(arr, fn) {
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            flag = true

        } else {
            return false
        }
    }
    return flag;
}
function fn(element,index,arr){
    return element %2 !== 0;

}
let arr = [10,2,3,11]
console.log(everyy(arr,fn))