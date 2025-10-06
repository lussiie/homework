function strstr(str, sub_str){
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < sub_str.length; j++){
        if (str[i] === sub_str[j]){
         j++;
         return true;  
        }
        else 
            return false;
    }
}
}
const str1 = "Learning JavaScript";
const str2 = "Java";
console.log(strstr(str1,str2))