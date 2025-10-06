function index(arr, index){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === index){
            return arr[i];
        }
    }
}
let arr = [1,3,2,8,9];
let index = 2;
console.log(index(arr,index));