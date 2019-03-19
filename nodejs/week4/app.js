const StudentBook = require('./studentbook'); //it's a path, . stands for one directory up
const hyf_students = new StudentBook.StudentBook(); // should be before server
const body_parser = require('body-parser');

//const app = express(); //now we don't need http, express handles it

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

router.route('/students') 
    .get((req, res) => {
        res.send('Something');
    })
    .post((res, req) => {
        res.send('add Something');
    });

app.get('/students', (req, res) => {
    console.log('user query', req.query);
    if (req.query.name) {
        const student = hyf_students.getStudentDetailByName(req.query.name);

        console.log(student.length);//???
        if (student.length > 0) {
            console.log(student.length)
            res.send(student);
            
        }
        else{
            res.status = 404;
            console.log(student.length)
            res.send(`Student doesn't exist`);
        }
    } else {
        res.send(hyf_students.getStudentsList());
    }
});

app.post('/students', (req, res) =>{
    console.log(req.body); //post is the body, only for GET is the query
    if(hyf_students.addStudent(req.body)){
        res.status = 200;
        res.send('Success!');

    }
    else{
        res.status = 404;
        res.send("smth wrong");
    }
    res.send(req.body);

});

//app.use(logger);//this is to see requests

app.listen(port, () => console.log(`HYF app listening on port ${port}!`));

// //to get user's data
// const {
//     parse
// } = require('querystring');

// const Bob = {
//     "name": "Sponge Bob",
//     "classId": 08,
//     "email": "bob@gmail.com",
//     "phone": "(745) 235-6138"
// }

// const server = http.createServer(function (req, res) {
//     const url = req.url;

//     // hyf_students.addStudent(Natalia);
//     // hyf_students.addStudent(Natalia); //adding an existing student, but why 3 times console.log? http://prntscr.com/muz42l

//     //hyf_students.getStudentDetailByName("Natalia");
//     console.log(req.method, req.url);

//     //routing
//     if (url == '/getstudentslist' && req.method === 'GET') {
//         res.end(JSON.stringify(hyf_students.getStudentsList()));
//     } else if (url == '/getlistbyclass' && req.method === 'GET') {
//         let classToShow = 11; //take from user's input after
//         const status = hyf_students.getListByClass(classToShow);
//         if (status) {
//             res.status = 201;
//             res.end(JSON.stringify(status));
//         } else {
//             res.status = 400;
//             res.end(`Class doesn't exist`);
//         }
//     } else if (url == '/getlistbyname' && req.method === 'GET') {
//         let searchedName = 'Keer';
//         const status = hyf_students.getStudentDetailByName(searchedName);
//         if (status) {
//             res.status = 201;
//             res.end(JSON.stringify(status));
//         } else {
//             res.status = 400;
//             res.end('Wrong student');
//         }
//     } else if (url == '/editinfo' && req.method === 'PUT') {
//         const status = hyf_students.editStudentInfo({
//             "name": "Hakki",
//             "classId": 6,
//             "email": "hakki@gmail.com",
//             "phone": "(263) 972-6043"
//         });
//         if (status) {
//             res.status = 200;
//             res.end('Edited successfully');
//         } else {
//             res.status = 501; //not implemented status code
//             res.end('Wrong student');
//         }
//     } else if (url === '/addstudent') {
//         if (req.method === 'POST') {
//             let body = '';
//             req.on('data', chunk => {
//                 body += chunk.toString(); //convert buffer to string
//             });
//             req.on('end', () => {
//                 console.log(
//                     parse(body)
//                 ); //doesn't console.log:()
//                 res.end('Student added');
//             });
//         } else {
//             res.end(`
//         <!doctype html>
//         <html>
//         <body>
//             <form action="/" method="post">
//                 Name:          
//                 <input type="text" name="fname" /><br />
//                 Class:
//                 <input type="number" name="class" /><br />
//                 Email:
//                 <input type="email" name="email" /><br />
//                 Phone:
//                 <input type="phone" name="phone" /><br />
//                 <button>Save</button>
//             </form>
//         </body>
//         </html>
//     `);
//         }
//         // console.log("request type: " + req.method); //https://stackoverflow.com/questions/26408782/how-do-i-get-input-post-data-in-node-js
//         // let body = '';
//         // req.on('data', chunk => {
//         //     body += chunk;
//         // });
//         // req.on('end', () => {
//         //     console.log(body);
//         //     let data = qs.parse(body);
//         //     res.writeHead(200);
//         //     res.end(JSON.stringify(data));
//         // });

//         //https://itnext.io/how-to-handle-the-post-request-body-in-node-js-without-using-a-framework-cd2038b93190









//         //const newStudent = req.;
//         // const status = hyf_students.addStudent(Bob); //what exactly is this status variable? why if(status)?
//         // if (status) {
//         //     res.status = 201;
//         //     res.end('Student added successfully');
//         // } else {
//         //     res.status = 400;
//         //     res.end('Failed: student already in the list');
//         // }
//     } else if (url === '/deletestudent' && req.method == "DELETE") {
//         const status = hyf_students.deleteStudent('Sponge Bob');
//         if (status) {
//             res.status = 200;
//             console.log(status);
//             res.end('student deleted');
//         } else {
//             res.status = 400;
//             res.end(`Student doesn't exist`);
//         }
//     }
// });
// server.listen(8080, function () {
//     console.log('Your server is running at port 8001...');
// });