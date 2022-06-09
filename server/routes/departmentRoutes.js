const express = require("express");
const router = express.Router();
const {
  getDepartments,
  addDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/departmentController");
const { protect } = require("../middleware/authMiddleware");

// router.route('/').get((req, res) => {
//     Department.find()
//         .then(departments => res.json(departments))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//     const departmentName = req.body.departmentName;

//     const newDepartment = new Department({departmentName});

//     newDepartment.save()
//         .then(() => res.json('Department added!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

router.route("/").get(getDepartments).post(protect, addDepartment);
router
  .route("/:id")
  .put(protect, updateDepartment)
  .delete(protect, deleteDepartment);

module.exports = router;
