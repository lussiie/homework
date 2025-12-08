function asyncDouble(n){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * 2);
        });
    })
}
asyncDouble(10).then(result => console.log(result));