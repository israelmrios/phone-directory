const router = require('express').Router();
let Department = require('../models/Department');

router.route('/').get((req, res) => {
    Department.find()
        .then(departments => res.json(departments))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const departmentName = req.body.departmentName;

    const newDepartment = new Department({departmentName});

    newDepartment.save()
        .then(() => res.json('Department added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;