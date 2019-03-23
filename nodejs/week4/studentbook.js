const studentsFullList = require('./hyf-students.json');

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

    //1. Get full student list
    getStudentsList() {
        return studentsFullList.map(student => {
            let name = student.name;
            let email = student.email;
            return {
                name,
                email
            };
        });
    }

    //2. Get list of students by class
    getListByClass(classNumber) {
        let classList = studentsFullList.filter(student => student.classId == classNumber);
        if (classList.length != 0) {
            return classList.map(student => {
                let name = student.name;
                let classId = student.classId;
                return {
                    name,
                    classId
                };
            });
        } else {
            return false;
        }
    }

    //3. Get student's detailed information by name
    getStudentDetailByName(name) {
        let selectedStudent = studentsFullList.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
        if (selectedStudent.length == 0) {
            console.log(`No such student`);
            return null;
        } else {
            console.log(selectedStudent);
            return selectedStudent;
        }
    }

    isValidStudent(studentToCheck) {
        if (studentToCheck.hasOwnProperty('name') && studentToCheck.hasOwnProperty('classId') && studentToCheck.hasOwnProperty('email') && studentToCheck.hasOwnProperty('phone')) {
            if(studentToCheck.name.length < 2){
                throw new Error ('Please enter a valid name');
            }

            const studentExists = this.getStudentDetailByName(studentToCheck.name);

            if(studentExists){
                throw new Error('Student already in the list');
            }

            return true;

        } else {
            throw new Error('Student should have name, phone, classid and email');
        }
    }

    // 4. Add a new student to HYF which receive the below person object as an input and store to existing list. Check for duplication. 
    addStudent(newStudent) {
            if (this.isValidStudent(newStudent)) {
                //console.log(newStudent instanceof Student); //why is it false? Class constructor itself does not participate in the check https://javascript.info/instanceof //by the logic of instanceof, the prototype actually defines the type, not the constructor function.
                studentsFullList.push(newStudent);
                return true;
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
        });
        return true; //I still don't get it, how can I return student object instead of true?
    }

    deleteStudent(studentOut) {
        let studentToDelete = studentsFullList.filter(student => student.name === studentOut.name);
        console.log('delete: ', studentToDelete); //shows the right object
        console.log(studentsFullList.indexOf(studentToDelete));//shows -1
        if (studentToDelete) {
            studentsFullList.splice(studentsFullList.indexOf(studentToDelete), 1);
            console.log("here is your full list", studentsFullList); 
            return studentsFullList;
        } else {
            console.log(`Student doesn't exist`);
            return null;
        }
    }
}

module.exports.StudentBook = StudentBook; //you export whatever you want to make available from this file. In this case it's a StudentBook class
module.exports.Student = Student;