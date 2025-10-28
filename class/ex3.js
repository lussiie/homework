class Student{
    constructor(name){
        this.name = name;
        this.grades = [];
    }
 addGrade(grade){
    this.grades.push(grade);
 }
 average(){
    const size = this.grades.length;
    let sum = 0;
    for(let i = 0; i < size; i++){
        sum += this.grades[i];
    }
    return Math.floor(sum / size);
 }
}
const st = new Student("Aram")
st.addGrade(7);
st.addGrade(8);
st.addGrade(2);
st.addGrade(9);
st.addGrade(9);
st.addGrade(5);
st.addGrade(7);
console.log(st);
console.log(st.average())