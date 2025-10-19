function arrayyy(arr){
    for(let i = 0; i < arr.length; i++){
        let found = false;
        for(let j = 0; j < arr.length; j++){
        if(i !== j && arr[i] === arr[j]){
            found = true;
            break;
        }
        }
      if(!found)
    return arr[i]
}
}
let arr = [3,3,4,4,5,6,6]
console.log(arrayyy(arr))