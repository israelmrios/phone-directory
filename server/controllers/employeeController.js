const Employee = require("../models/Employee");

// @description     Gets all Employees
// @route           GET /api/employees
// @access          Public
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    res.status(200).json(employees);
  } catch (error) {
    console.error(`ERROR: ${error}`);
    res.status(401);
  }
};

// @description     Gets an Employee by ID
// @route           GET /api/employees/:id
// @access          Public
const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    res.status(200).json(employee);
  } catch (error) {
    console.error(`ERROR: ${error}`);
    res.status(401);
  }
};

// @description     Gets an Employee by Department ID
// @route           GET /api/employees
// @access          Public
const getEmployeeByDep = async (req, res) => {
  try {
    const employees = await Employee.find(req.query);

    res.status(200).json(employees);
  } catch (error) {
    console.error(`ERROR: ${error}`);
    res.status(401);
  }
};

// @description     Adds an Employee
// @route           POST /api/employees
// @access          Private
const addEmployee = async (req, res) => {
  try {
    const newEmployee = await Employee.create({
      department: req.body.department,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      title: req.body.title,
      email: req.body.email,
      phone1: req.body.phone1,
      phone2: req.body.phone2,
      ext: req.body.ext,
      notes: req.body.notes,
    });
    res.status(200).json(newEmployee);
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
};

// @description     Updates an Employee
// @route           PUT /api/employees/:id
// @access          Private
const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      res.status(400).json({ message: "Employee not found" });
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedEmployee);
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
};

// @description     Deletes an Employee
// @route           DELETE /api/employees/:id
// @access          Private
const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      res.status(400).json({ message: "Employee not found" });
    }

    await employee.remove();

    res.status(200).json({ id: req.params.id });
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
};

module.exports = {
  getEmployees,
  getEmployee,  
  getEmployeeByDep,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
