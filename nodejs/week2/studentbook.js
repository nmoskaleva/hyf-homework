var studentsFullList = require('./hyf-students.json');
var fs = require('fs');

class Student {
    constructor(name, classId, email, phone) {
        this.name = name;
        this.classId = classId;
        this.email = email;
        this.phone = phone;
    }
}

class StudentBook {
    // constructor() {
    //     this.studentsList = [];
    // }

    //1. Get full student list
    getStudentsList() {
        return studentsFullList.map(student => {
            let name = student.name;
            let email = student.email;
            return {name, email};
        });
    }

    //2. Get list of students by class
    getListByClass(classNumber) {
        let classList = studentsFullList.filter(student => student.classId == classNumber);
        return classList.map(student => {
            let name = student.name;
            let classId = student.classId;
            return {
                name,
                classId
            };
        });
    }

    //3. Get student's detailed information by name
    getStudentDetailByName(name) {
        let selectedStudent = studentsFullList.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
        if (selectedStudent.length == 0) {
            console.log(`No result found`);
        } 
        return selectedStudent;
    }

    // 4. Add a new student to HYF which receive the below person object as an input and store to existing list. Check for duplication. 
    addStudent(newStudent) {
        let foundDuplicates = studentsFullList.filter(student => {
            return student.name.includes(newStudent.name) == true || student.email.includes(newStudent.email) == true
        });
        if (foundDuplicates.length > 0) {
            console.log(`Student already added`);
        } else {
            studentsFullList.push(newStudent);
        }
        return {
            newStudent,
            studentsFullList
        }
    }

    // 5. Edit existing student information
    editStudentInfo(editedStudentInfo) {
        studentsFullList.forEach(student => {
            if (editedStudentInfo.name == student.name) {
                student.classId = editedStudentInfo.classId;
                student.email = editedStudentInfo.email;
                student.phone = editedStudentInfo.phone;
                return student;
            } else {
                console.log('No such student');
            }
        })
        return {
            editedStudentInfo,
            studentsFullList
        };
    }
}

module.exports.StudentBook = StudentBook; //you export whatever you want to make available from this file. In this case it's a StudentBook class
module.exports.Student = Student;