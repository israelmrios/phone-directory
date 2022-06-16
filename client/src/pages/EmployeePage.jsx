import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import EmployeeItem from "../components/EmployeeItem";

function EmployeePage() {
  const { employees, isLoading } = useSelector(
    (state) => state.employees
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Employees</h1>
      </section>
      <section className="content">
        {employees.length > 0 ? (
          <div className="departments">
            {employees.map((employee) => (
              <EmployeeItem key={employee._id} employee={employee} />
            ))}
          </div>
        ) : (
          <h3>There are no employees in this department</h3>
        )}
      </section>
    </>
  );
}

export default EmployeePage;
