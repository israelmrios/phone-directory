import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createEmployee } from "../features/employees/employeeSlice";
import { getDepartments, reset } from "../features/departments/departmentSlice";

function EmployeeForm() {
  const [employeeFormData, setEmployeeFormData] = useState({
    department: "",
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone1: "",
    phone2: "",
    ext: "",
    notes: "",
  });

  const {
    department,
    firstName,
    lastName,
    title,
    email,
    phone1,
    phone2,
    ext,
    notes,
  } = employeeFormData;

  const dispatch = useDispatch();

  const { departments, isError, message } = useSelector(
    (state) => state.departments
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getDepartments());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  const onChange = (e) => {
    setEmployeeFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createEmployee(employeeFormData));
    setEmployeeFormData("");
  };

  return (
    <>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">Employee Information</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              placeholder="First Name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <select name="department" value={department} onChange={onChange}>
              <option></option>
              {departments.map((department) => {
                return (
                  <option
                    key={department._id}
                    name={department}
                    value={department._id}
                  >
                    {department.departmentName}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              placeholder="Job Title"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              id="phone1"
              name="phone1"
              value={phone1}
              placeholder="Phone 1"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              id="phone2"
              name="phone2"
              value={phone2}
              placeholder="Phone 2"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              id="ext"
              name="ext"
              value={ext}
              placeholder="Extension"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="notes"
              name="notes"
              value={notes}
              placeholder="Notes"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Add Employee
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default EmployeeForm;


// type="text"
// id="department"
// name="department"
// value={department}
// placeholder="Department"
// onChange={onChange}
