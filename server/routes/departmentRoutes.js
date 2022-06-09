const express = require("express");
const router = express.Router();
const {
  getDepartments,
  addDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/departmentController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getDepartments).post(protect, addDepartment);
router
  .route("/:id")
  .put(protect, updateDepartment)
  .delete(protect, deleteDepartment);

module.exports = router;
