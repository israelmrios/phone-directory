const Department = require("../models/Department");

// @description     Gets all Departments
// @route           GET /api/departments
// @access          Public
const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();

    res.status(200).json(departments);
  } catch (error) {
    console.error(`ERROR: ${error}`);
    res.status(401)
  }
};

// @description     Adds a Department
// @route           POST /api/departments
// @access          Private
const addDepartment = async (req, res) => {
  try {
    const departmentName = await Department.create({
      departmentName: req.body.departmentName,
    });

    res.status(200).json(departmentName);
  } catch (error) {
    console.error(`ERROR: ${error}`);
    res.status(401)
  }
};

// @description     Updates a Department
// @route           PUT /api/departments/:id
// @access          Private
const updateDepartment = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);

    if (!department) {
      res.status(400).json({ message: "Department not found" });
    }

    const updatedDepartment = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedDepartment);
  } catch (error) {
    console.error(`ERROR: ${error}`);
    res.status(401)
  }
};

// @description     Deletes a Department
// @route           DELETE /api/departments/:id
// @access          Private
const deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);

    if (!department) {
      res.status(400).json({ message: "Department not found" });
    }

    await department.remove();

    res.status(200).json({ id: req.params.id });
  } catch (error) {
    console.error(`ERROR: ${error}`);
    res.status(401)
  }
};

module.exports = {
  getDepartments,
  addDepartment,
  updateDepartment,
  deleteDepartment,
};
