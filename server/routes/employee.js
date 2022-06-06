const router = require('express').Router();
let Employee = require('../models/Employee');

router.route('/').get((req, res) => {
    Employee.find()
        .then(employees => res.json(employees))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const department = req.body.department;
    const title = req.body.title;
    const email = req.body.email;
    const phone1 = Number(req.body.phone1);
    const phone2 = Number(req.body.phone2);
    const ext = Number(req.body.ext);
    const notes = req.body.notes;

    const newEmployee = new Employee({
        firstName,
        lastName,
        department,
        title,
        email,
        phone1,
        phone2,
        ext,
        notes,
    });

    newEmployee.save()
        .then(() => res.json('Employee added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;