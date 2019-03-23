const StudentBook = require('./studentbook'); //it's a path, . stands for one directory up
//const Student = require(StudentBook.Student); /what's wrong with this? that it's not a path. You just require a studentBook

const hyf_students = new StudentBook.StudentBook();

const body_parser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();
const port = 8001;
app.use('api', router);

app.use(body_parser.urlencoded({
    extended: true
}));
app.use(body_parser.json());

app.get('/', (req, res) => res.send('HYF!'));

//this works
// router.get('/hi', (req, res) => {
//     res.send('I am hi');
// });

let Natalia = new StudentBook.Student('Natalia', "8", 'nat@gmail.com', '2222222');

app.route('/api/students') //not router.route
    .get((req, res) => {
        if (req.query.name) {
            console.log('user query', req.query);
            const student = hyf_students.getStudentDetailByName(req.query.name);
            if (student) {
                res.status = 200; //is it obligatory for a get request?
                res.send(student);
            } else {
                res.status = 404;
                res.send('No such student');
            }
        } else if (req.query.classId) {
            console.log(req.query);
            const student = hyf_students.getListByClass(req.query.classId);
            if (student) {
                res.status = 200;
                res.send(hyf_students.getListByClass(req.query.classId)); //classId like in JSON
            } else {
                res.status = 404;
                res.send('Class not found');
            }
        } else {
            res.status = 200;
            res.send(hyf_students.getStudentsList());
        }
    })
    .post((req, res) => {
        if (hyf_students.addStudent(req.body)) { //student is validated in ./studentbook.js
                res.status = 201;
                res.send('Student added');
        } else {
            res.status = 400;
            res.send('Student should have name, classid, phone and email');
        }
    })
    .put((req, res) => {
        if (hyf_students.editStudentInfo(req.body)) {
            res.status = 204; //or 200 if server sends additional info https://stackoverflow.com/questions/2342579/http-status-code-for-update-and-delete 
            res.send('Student info edited');
        } else {
            res.status = 400;
            res.send('Invalid request');
        }
    })
    .delete((req, res) => {
        if (hyf_students.deleteStudent(req.body)) { //should be JSON object in Postman, can't be just req.body, and then name in plain text? 
            res.status = 204;
            res.send('Student deleted');
        } else {
            res.status = 400; //404?
            res.send('No student to delete, or something went wrong');
        }
    });

// app.get('/students', (req, res) => {
//     console.log('user query', req.query);
//     if (req.query.name) {
//         const student = hyf_students.getStudentDetailByName(req.query.name);

//         console.log(student.length); //???
//         if (student) {
//             console.log(student.length)
//             res.send(student);

//         } else {
//             res.status = 404;
//             res.send(`Student doesn't exist`);
//         }
//     } else {
//         res.send(hyf_students.getStudentsList());
//     }
// });

let logger = function (req, res, next) {
    console.info(`GOT REQUEST! ${req.method} ${req.originalUrl}`);
    next(); // Passing the request to the next handler in the stack.
};

app.use(logger); //doesn't work

app.listen(port, () => console.log(`HYF app listening on port ${port}!`));