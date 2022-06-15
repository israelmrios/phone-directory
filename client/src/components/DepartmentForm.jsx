import { useState } from "react";
import { useDispatch } from "react-redux";
import { createDepartment } from "../features/departments/departmentSlice";

function DepartmentForm() {
  const [departmentName, setDepartmentName] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createDepartment({ departmentName }));
    setDepartmentName("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Department Information</label>
          <input
            type="text"
            name="departmentName"
            id="departmentName"
            value={departmentName}
            placeholder="Department Name"
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Department
          </button>
        </div>
      </form>
    </section>
  );
}

export default DepartmentForm;
