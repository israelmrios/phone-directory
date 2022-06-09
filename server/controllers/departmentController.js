const Department = require("../models/Department");

// @description     Gets all Departments
// @route           GET /api/departments
// @access          Public
const getDepartments = async (req, res) => {
  const departments = await Department.find();

  res.status(200).json(departments);
};

// @description     Adds a Department
// @route           POST /api/departments
// @access          Private
const addDepartment = async (req, res) => {
  const departmentName = await Department.create({
    departmentName: req.body.departmentName,
  });

  res.status(200).json(departmentName);
};

// @description     Updates a Department
// @route           PUT /api/departments/:id
// @access          Private
const updateDepartment = async (req, res) => {
  const department = await Department.findById(req.params.id);

  if (!department) {
    res.status(400).json("Error: " + err);
  }

  const updatedDepartment = await Department.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedDepartment);
};

// @description     Deletes a Department
// @route           DELETE /api/departments/:id
// @access          Private
const deleteDepartment = async (req, res) => {
  const department = await Department.findById(req.params.id);

  if (!department) {
    res.status(400).json("Error: " + err);
  }

  await department.remove();

  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getDepartments,
  addDepartment,
  updateDepartment,
  deleteDepartment,
};
