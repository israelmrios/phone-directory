import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteDepartment } from "../features/departments/departmentSlice";
import { getEmployeeByDep } from "../features/employees/employeeSlice";

function DepartmentItem({ department }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(getEmployeeByDep(department._id));
    navigate("/employee-page");
  };

  return (
    <div className="department">
      <button className="name" onClick={() => onClick(department._id)}>
        <h2>{department.departmentName}</h2>
      </button>
      <button
        className="close"
        onClick={() => dispatch(deleteDepartment(department._id))}
      >
        X
      </button>
    </div>
  );
}

export default DepartmentItem;
