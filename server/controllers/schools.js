const db = require('../database');

const controller = {
    getSchool: (req, res) => {

        try {
            const sqlGetSchool = "SELECT * FROM schools LIMIT 50;";
            db.query(sqlGetSchool, (err, result) => {
                res.send(result);
            });
        }
        catch {
            res.status(500);
        }
    }
}

module.exports = controller;