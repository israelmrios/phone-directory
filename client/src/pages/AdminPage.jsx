import { useEffect } from "react";
import { useNavigate } from  'react-router-dom'
import {useSelector} from 'react-redux'
import DepartmentForm from "../components/DepartmentForm";
import EmployeeForm from "../components/EmployeeForm";

function AdminPage() {
  const navigate = useNavigate();

  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    if(!user) {
      navigate('/')
    }

  }, [navigate, user])


  return (
  <>
  <section className="heading">
    <h1>Admin Page</h1>
  </section>

  <DepartmentForm />
  <EmployeeForm />
  </>
  );
}

export default AdminPage;
