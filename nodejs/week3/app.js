var http = require('http');
var fs = require('fs');
var StudentBook = require('./studentbook'); //it's a path, . stands for one directory up
var hyf_students = new StudentBook.StudentBook(); // should be before server

var Bob = {
    "name": "Sponge Bob",
    "classId": 08,
    "email": "bob@gmail.com",
    "phone": "(745) 235-6138"
}

var server = http.createServer(function (req, res) {
    var url = req.url;

    // hyf_students.addStudent(Natalia);
    // hyf_students.addStudent(Natalia); //adding an existing student, but why 3 times console.log? http://prntscr.com/muz42l

    //hyf_students.getStudentDetailByName("Natalia");
    console.log(req.method, req.url);

    //routing
    if (url == '/getstudentslist' && req.method === 'GET') {
        res.end(JSON.stringify(hyf_students.getStudentsList()));
    } else if (url == '/getlistbyclass' && req.method === 'GET') {
        var classToShow = 11; //take from user's input after
        var status = hyf_students.getListByClass(classToShow);
        if (status) {
            res.status = 201;
            res.end(JSON.stringify(status));
        } else {
            res.status = 400;
            res.end(`Class doesn't exist`);
        }
    } else if (url == '/getlistbyname' && req.method === 'GET') {
        let searchedName = 'Keer';
        const status = hyf_students.getStudentDetailByName(searchedName);
        if (status) {
            res.status = 201;
            res.end(JSON.stringify(status));
        } else {
            res.status = 400;
            res.end('Wrong student');
        }
    } else if (url == '/editinfo' && req.method === 'PUT') {
        var status = hyf_students.editStudentInfo({
            "name": "Hakki",
            "classId": 6,
            "email": "hakki@gmail.com",
            "phone": "(263) 972-6043"
        });
        if (status){
            res.status = 201;
            res.end('Edited successfully' + JSON.stringify(status));
        }
        else{
            res.status = 400;
            res.end('Wrong student');
        }
    } else if (url === '/addstudent' && req.method === 'POST') {
        console.log("request type: " + req.method);
        //const newStudent = req.;
        const status = hyf_students.addStudent(Bob); //what exactly is this status variable? why if(status)?
        if (status) {
            res.status = 201;
            res.end('Student added successfully');
        } else {
            res.status = 400;
            res.end('Failed: student already in the list');
        }
    } else if (url === '/deletestudent' && req.method == "DELETE") {
        const status = hyf_students.deleteStudent('Sponge Bob');
        if(status){
            res.status = 201;
            console.log(status);
            res.end('student deleted');
        }
        else {
            res.status = 400;
            res.end(`Student doesn't exist`);
        }
    }
});
server.listen(8001, function () {
    console.log('Your server is running at port 8001...');
});