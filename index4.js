function foo (str){
let result= "";
for(let i = str.length - 1; i >= 0; i--){

    result += str[i];
}
return result;
}
let str = "home"
console.log(foo(str));
