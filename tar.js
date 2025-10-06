function foo(arr,target){
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i, j];
            }
       }       
    }
    return[-1 -1];
}
    let target = 7;
    let arr = [ 1, 3,4,5,6,2,1,4];
    console.log(foo(arr, target));