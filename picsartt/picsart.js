class PicsartAcademy {
    constructor(classroom, library, kitchen){
        this.classroom = classroom;
        this.library = library;
        this.kitchen = kitchen;
    }
    showInfo(){
        console.log("Picsart has classrooms, books, and cooking facilities");
    }
}

class Classroom extends PicsartAcademy {
    constructor(teachingroom) {
        super(teachingroom, null, null);
        this.grades = [];
    }
    addStudent(name){
        this.grades.push(name);
    }
    listStudents(){
        console.log(`All students: ${this.grades.join(", ")}`);
    }
}

class Library extends PicsartAcademy {
    constructor() {
        super(null, null, null);
        this.books = [];
    }
    addBook(title, author){
        this.books.push({title, author});
    }
    listBooks(){
        console.log("Books in library:", this.books);
    }
}

class Kitchen extends PicsartAcademy {
    constructor() {
        super(null, null, null);
        this.staff = [];
    }
    addWorker(name){
        this.staff.push(name);
    }
    listWorkers(){
        console.log("Kitchen staff:", this.staff);
    }
}

const classroom = new Classroom(101);
const library = new Library();
const kitchen = new Kitchen();

classroom.addStudent("Alice");
classroom.addStudent("James");
classroom.listStudents();

library.addBook("Clean Code", "Robert C. Martin");
library.listBooks();

kitchen.addWorker("Chef Bob");
kitchen.listWorkers();

const academy = new PicsartAcademy("Main classroom", "Main library", "Main kitchen");
academy.showInfo();
