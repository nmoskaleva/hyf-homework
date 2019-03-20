const StudentBook = require('./studentbook'); //it's a path, . stands for one directory up
const hyf_students = new StudentBook.StudentBook(); // should be before server
const body_parser = require('body-parser');
const express = require('express');
const app = express();
const port = 8001;
const router = express.Router();
app.use('api', router);

app.use(body_parser.urlencoded({
    extended: true
}));
app.use(body_parser.json());

app.get('/', (req, res) => res.send('HYF!'));

app.route('/api/students') //not router.route
    .get((req, res) => {
        if (req.query.name) { //how to define if it is in quesry string or a parameter?
            console.log('user query', req.query);
            const student = hyf_students.getStudentDetailByName(req.query.name);
            if (student) {
                res.send(student);
            } else {
                res.status = 404;
                res.send('No such student');
            }
        } else {
            res.send(hyf_students.getStudentsList());
        }
    })
    .post((req, res) => {
        if (hyf_students.addStudent(req.body)) { //now validate a student
            res.status = 201;
            res.send('Student added');
        } else {
            res.status = 404;
            res.send('Something went wrong, maybe student is already in the list');
        }
    })
    .put((req, res) => {
        if (hyf_students.editStudentInfo(req.body)) {
            res.status = 200;
            res.send('Student info edited');
        } else {
            res.status = 404;
            res.send('Invalid request');
        }
    })
    .delete((req, res) => {
        if (hyf_students.deleteStudent(req.body.name)) { // so, it should be JSON object in Postman, not just name in plain text. is it okay? can't be just req.body, and then name in plain text? 
            res.status = 200;
            res.send('Student deleted');
        } else {
            res.status = 404;
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

//app.use(logger);//this is to see requests

app.listen(port, () => console.log(`HYF app listening on port ${port}!`));