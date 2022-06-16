import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DepartmentItem from "../components/DepartmentItem";
import Spinner from "../components/Spinner";
import { getDepartments, reset } from "../features/departments/departmentSlice";

function Dashboard() {
  const dispatch = useDispatch();

  const { departments, isLoading, isError, message } = useSelector(
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

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Departments</h1>
        <p>Select a department to view a list of employees</p>
      </section>
      <section className="content">
        {departments.length > 0 ? (
          <div className="departments">
            {departments.map((department) => (
              <DepartmentItem key={department._id} department={department} />
            ))}
          </div>
        ) : (
          <h3>There are no departments</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
