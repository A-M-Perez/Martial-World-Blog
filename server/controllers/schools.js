const db = require('../database');

const controller = {
    getSchool: (req, res) => {

        const sqlGetSchool = "SELECT * FROM schools LIMIT 50;";

        db.query(sqlGetSchool)
            .then((result) => {
                res.send(result);
            })
            .catch(() => {
                res.status(500)
            });
    },
    getSchoolById: (req, res) => {

        const schoolId = req.params.id;
        const sqlGetSchoolId = "SELECT * FROM schools WHERE id = ? LIMIT 1;";

        db.query(sqlGetSchoolId, [schoolId])
            .then((result) => {
                res.send(result);

            })
            .catch(() => {
                res.status(500);
            });
    }
};

module.exports = controller;

