function foo(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
    
}
    let arr= [ 10, 20, 30]
    console.log(foo(arr))