const express = require("express");
const router = express.Router();
const {
  getEmployees,
  getEmployeeByDep,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getEmployees).post(protect, addEmployee);
router.route("/employees-by-department").get(getEmployeeByDep);
router
  .route("/:id")
  .put(protect, updateEmployee)
  .delete(protect, deleteEmployee);

module.exports = router;
