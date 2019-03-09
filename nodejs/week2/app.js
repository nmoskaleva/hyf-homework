var http = require('http');
var fs = require('fs');
var StudentBook = require('./studentbook'); //it's a path, . stands for one directory up

var server = http.createServer(function (req, res) {
    var url = req.url;

    var hyf_students = new StudentBook.StudentBook();

    var Natalia = {
        "name": "Natalia",
        "classId": 08,
        "email": "nat@gmail.com",
        "phone": "(745) 235-6338"
    }

   // hyf_students.addStudent(Natalia);
   // hyf_students.addStudent(Natalia); //adding an existing student, but why 3 times console.log? http://prntscr.com/muz42l

   hyf_students.getStudentDetailByName("Natalia");

    //routing
    if (url == '/getstudentslist') {
        res.end(JSON.stringify(hyf_students.getStudentsList()));
    } else if (url == '/getlistbyclass') {
        res.end(JSON.stringify(hyf_students.getListByClass(07)));
    } else if (url == '/getlistbyname') {
        res.end(JSON.stringify(hyf_students.getStudentDetailByName('Keer')));
    } else if (url == '/editinfo') {
        res.end(JSON.stringify(hyf_students.editStudentInfo({
            "name": "Hakki",
            "classId": 6,
            "email": "hakki@gmail.com",
            "phone": "(263) 972-6043"
        })))
        res.end(JSON.stringify(hyf_students.getStudentsList()));
    } else if (url == '/addstudent'){
        res.end(JSON.stringify(hyf_students.addStudent(Natalia)));
    }
    
    else if (url.match(/.css$/)) {
        var fileStream = fs.createReadStream('./main.css', 'UTF-8');
        res.writeHead(200, {
            'Content-Type': 'text/css'
        });
        fileStream.pipe(res);
    } else {
        fs.readFile('index.html', 'utf-8', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    }
});

server.listen(8001, function () {
    console.log('Your server is running at port 8001...');
});