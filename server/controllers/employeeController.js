const Employee = require("../models/Employee");

// @description     Gets all employees
// @route           GET /api/employees
// @access          Public
const getEmployees = async (res, req) => {
  const employees = await Employee.find();

  res.status(200).json(employees);
};

// @description     Adds an Employee
// @route           POST /api/employees
// @access          Private
const addEmployee = async (res, req) => {
  const newEmployee = await Employee.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    department: req.body.department,
    title: req.body.title,
    email: req.body.email,
    phone1: req.body.phone1,
    phone2: req.body.phone2,
    ext: req.body.ext,
    notes: req.body.notes,
  });
  res.status(200).json(newEmployee);
};

// @description     Updates an Employee
// @route           PUT /api/employees/:id
// @access          Private
const updateEmployee = async (res, req) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(400).json("Error: " + err);
  }

  const updatedEmployee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedEmployee);
};

// @description     Deletes an Employee
// @route           DELETE /api/employees/:id
// @access          Private
const deleteEmployee = async (res, req) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(400).json("Error: " + err);
  }

  await employee.remove();

  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
