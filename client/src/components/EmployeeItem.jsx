import { useDispatch } from "react-redux";
import { deleteEmployee } from "../features/employees/employeeSlice";

function EmployeeItem({ employee }) {
  const dispatch = useDispatch();

  return (
    <div className="department">
      <div>
        <h2>
          {employee.firstName} {employee.lastName}
        </h2>
        <h3>{employee.title}</h3>
        <p>{employee.email}</p>
        <p><strong>Phone 1: </strong>{employee.phone1} <strong>Phone 2: </strong>{employee.phone2}</p>
        <p><strong>Ext: </strong>{employee.ext}</p>
        <li><i>{employee.notes}</i></li>
        <button
          className="close"
          onClick={() => dispatch(deleteEmployee(employee._id))}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default EmployeeItem;
