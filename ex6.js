function indexx(arr,element){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === element){
            return i;
        }

    }
return -1;
}
let arr = [1,2,3,4,5];
let element = 2;
console.log(indexx(arr,element))