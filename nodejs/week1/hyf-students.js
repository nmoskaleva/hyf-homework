let hyfStudentsArray = [{
        "name": "Hakki",
        "classId": 08,
        "email": "adahbour54@gmail.com",
        "phone": "(263) 972-6043"
    },
    {
        "name": "Keerthika devi Alampalli",
        "classId": 08,
        "email": "keerthi1822@gmail.com",
        "phone": "(745) 285-6338"
    },
    {
        "name": "Rieko",
        "classId": 07,
        "email": "adahbour54@gmail.com",
        "phone": "(971) 436-6442"
    },
    {
        "name": "Sheila Qasemi",
        "classId": 07,
        "email": "sheilaqasemi2018@gmail.com",
        "phone": "(457) 527-9154"
    },
    {
        "name": "Virgeen",
        "classId": 07,
        "email": "virginrashed4@gmail.com",
        "phone": "(259) 245-5777"
    },
    {
        "name": "Abod",
        "classId": 06,
        "email": "a-hassam@outlook.com",
        "phone": "(939) 553-4886"
    },
    {
        "name": "afshin",
        "classId": 06,
        "email": "afshin_rommel@yahoo.com",
        "phone": "(548) 420-7322"
    }
]

class Student {
    constructor(name, classId, email, phone) {
        this.name = name;
        this.classId = classId;
        this.email = email;
        this.phone = phone;
    }
}

class StudentBook {
    constructor() {
        this.studentsList = [];
    }
    //1. A method that returns list is all HYF students
    getStudentsList() {
        let fullListOfStudents = this.studentsList.map(student => {
            let name = student.name;
            let email = student.email;
            return {
                name,
                email
            }
        });
        console.log(fullListOfStudents);
        return fullListOfStudents;
    }

    //2. A method that can return a filtered list of students by class name
    getListByClass(classNumber) {
        let classList = this.studentsList.filter(student => student.classId == classNumber);
        return classList.map(student => {
            let name = student.name;
            let classId = student.classId;
            return {
                name,
                classId
            };
        });
    }

    //3. A method that can return one student's detailed information
    getStudentDetailByName(name) {
        let selectedStudent = this.studentsList.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
        if (selectedStudent.length == 0) {
            console.log(`No result found`);
        } else {
            return selectedStudent;
        };
    }

    // 4. A method that can add a new student to HYF which receive the below person object as an input and store to existing list. Check for duplication. 
    addStudent(newStudent) {
        let foundDuplicates = this.studentsList.filter(student => {
            return student.name.includes(newStudent.name) == true || student.email.includes(newStudent.email) == true
        });
        if (foundDuplicates.length > 0) {
            console.log(`Student already added`);
        } else {
            this.studentsList.push(newStudent);
        }
    }

    // 5. A method that can edit existing student information
    editStudentInfo(editedStudentInfo) {
        this.studentsList.filter(student => {
            if (editedStudentInfo.name == student.name) {
                student.classId = editedStudentInfo.classId;
                student.email = editedStudentInfo.email;
                student.phone = editedStudentInfo.phone;
                return student;
            }
        })
    }

    //6. A method to delete a student
    deleteStudent(name) {
        let studentToDelete = this.studentsList.filter(student => student.name.toLowerCase() == name.toLowerCase());
        console.log(studentToDelete);
        this.studentsList.splice(this.studentsList.indexOf(studentToDelete), 1);
        return this.studentsList;
    }
}

let hyfStudents = new StudentBook();

let Hakki = new Student(`Hakki`, 8, 'll@g.com', '222-22-22');
let Keerthika = new Student(`Keerthika`, 8, `dfg@sd`, `333-33-33`);
let Rieko = new Student(`Rieko`, 9, `bdk@jk`, `111-11-11`);
let Sheila = new Student(`Sheila Qasemi`, 8, `dsf@sd`, `999-99-99`);
let studentWithDuplicatedEmail = new Student(`Sheila not Sheila`, 8, `dsf@sd`, `555-99-99`);
let Virgeen = new Student(`Virgeen`, 7, `virginrashed4@gmail.com`, `(259) 245-5777`);
let spongeBob = new Student(`Bob`, 9, `spongebob@gmail.com`, `245-5666`)

hyfStudents.addStudent(Hakki);
hyfStudents.addStudent(Keerthika);
hyfStudents.addStudent(Rieko);
hyfStudents.addStudent(Sheila);
hyfStudents.addStudent(Sheila); //existing student
hyfStudents.addStudent(studentWithDuplicatedEmail); //student with the same email
hyfStudents.addStudent(Virgeen);
hyfStudents.addStudent(spongeBob);

hyfStudents.getStudentsList();

hyfStudents.getListByClass(8);
hyfStudents.getListByClass(7);

hyfStudents.getStudentDetailByName(`Hakk`);
hyfStudents.getStudentDetailByName('Virgeen');

hyfStudents.editStudentInfo({
    "name": "Virgeen",
    "classId": 09,
    "email": "virginrashed4@gmail.com",
    "phone": "(259) 245-5777"
});

hyfStudents.editStudentInfo({
    "name": "Hakki",
    "classId": 07,
    "email": "adahbour54@gmail.com",
    "phone": "(263) 972-6043"
})

hyfStudents.deleteStudent('Bob');
hyfStudents.getStudentsList();