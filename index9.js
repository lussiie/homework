function substring(str, subStr){
    for(let i = 0; i <= str.length - subStr.length; i++) {
        let found = true;
        for(let j = 0; j < subStr.length; j++){
            if(str[i + j] !== subStr[j] ){
                found = false;
                break;
            }
        }
        if (found) return true;

    } return false;
}
let str = "JavaScript";
let sub = "Java";
console.log(substring(str,sub))