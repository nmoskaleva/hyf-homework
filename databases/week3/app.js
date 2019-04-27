const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const db = require('./db');

//creating a server
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.listen('8000', () => {
    console.log('Now listening on port 8000');
});

app.get('/', (req, res) => {
    res.send('Hello');
});

//routing starts here
app.use('/api', router);

//QUERING
db.query('SELECT * FROM podcast', function(err, rows, fields){
    if(err) throw err;
        console.log(rows);
});
//DELETE THIS