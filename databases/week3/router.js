const express = require('express');
const router = express.Router();

const db = require('./db');

function handleError(res, error) {
    res.status(500);
    console.log(error);
    res.end(JSON.stringify({
        message: "A SQL error occurred.",
        error: error.sqlMessage
    }));
}


// /api/users
router.route('/users')
    // 1. Return an array of all usernames
    .get((req, res) => {
        db.query(`SELECT * FROM user`, function (err, result) {
            res.setHeader('Content-Type', 'application/json');
            if (err) throw error;
            res.send(JSON.stringify(result));
        })
    })

    // 2. Create a new user
    .post((req, res) => {
        console.debug(req.body);
        db.query(`INSERT INTO user (username, email) VALUES(?, ?);`, [req.body.username, req.body.email], function (err, result) {
            res.setHeader('content-Type', 'application/json');
            if (err) handleError();
            res.setHeader('Location', `/${result.insertId}`);
            res.sendStatus(201);
        })
    });


//api/user/id
router.route('/users/:id')
    // 3. Retrieve full user information.
    .get((req, res, next) => {
        console.log(req.params);
        db.query(`SELECT * FROM user WHERE id = ?`, [req.params.id], function (error, result) {
            res.setHeader('content-Type', 'application/json');
            if (error) handleError();
            res.send(JSON.stringify(result));
            res.sendStatus(200);
        });
    })
    //4. Modify user information.
    .put((req, res, next) => {
        console.log(req.body);
        if (req.body.username && req.body.email) {
            db.query(`UPDATE user SET email = ?, username = ? WHERE id = ?`, [req.body.email, req.body.username, req.params.id], function (err, result) {
                res.setHeader('content-Type', 'application/json');
                if (err) handleError();
                res.sendStatus(200);
            });
        } else if (req.body.email) {
            db.query(`UPDATE user SET email = ? WHERE id = ?`, [req.body.email, req.params.id], function (err, result) {
                res.setHeader('content-Type', 'application/json');
                if (err) handleError();
                res.sendStatus(200);
                console.log(result);
            });
        } else if (req.body.username) {
            db.query(`UPDATE user SET username = ? WHERE id = ?`, [req.body.username, req.params.id], function (err, result) {
                res.setHeader('content-Type', 'application/json');
                if (err) handleError();
                res.sendStatus(200);
            });
        }
    })

    // 5. Delete a user
    .delete((req, res, next) => {
        db.query(`DELETE FROM user WHERE id = ?`, [req.params.id], function (error, result) {
            if (error) handleError();
            res.sendStatus(200);
            res.end('User deleted');
        });
    });

// /api/users/:id/podcasts
router.route('/users/:id/podcasts')
    // 6. List all podcasts of a user.
    .get((req, res, next) => {
        db.query(`SELECT podcast.title FROM user JOIN user_podcast ON user.id = user_podcast.user_id
               JOIN podcast ON podcast.id = user_podcast.podcast_id WHERE user.id = ?`, [req.params.id], function (error, result) {
            if (error) handleError();
            res.send(JSON.stringify(result));
        });
    })

    // 7. Create a new podcast for the given user.
    .post((req, res, next) => {
        db.query(`INSERT INTO podcast (id, title) VALUES (NULL, ?); 
        INSERT INTO user_podcast (user_id, podcast_id) VALUES (?, LAST_INSERT_ID());`, [req.body.title, req.params.id], function (err, result) {
            res.setHeader('content-Type', 'application/json');
            if (err) handleError();
            res.setHeader('Location', `/${result.insertId}`); //? undefined
            res.sendStatus(201);
        });
    });

router.route('/users/:id/podcasts/:podcast_id')
    //8. Allow modifying the title of a podcast.
    .put((req, res, next) => {
        db.query(`UPDATE podcast SET title = ? WHERE id = ?`, [req.body.title, req.params.podcast_id], function (err, result) {
            if (err) handleError();
            res.sendStatus(200);
            res.send(JSON.stringify(result));
        })
    })

    //9. Delete a user's podcast.
    .delete((req, res, next) => {
        db.query(`DELETE from podcast WHERE id = ?`, [req.params.podcast_id], function (error, result) {
            if (error) throw error;
            res.sendStatus(200);
            res.end(JSON.stringify(result));
        })
    })

module.exports = router;