import axios from "axios";

const API_URL = "/api/employees/";

// Add a new Employee
const createEmployee = async (employeeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, employeeData, config);

  return response.data;
};

// Get all Employees
const getEmployees = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Get Employees by Department ID
const getEmployeeByDep = async (departmentData) => {
  const response = await axios.get(API_URL + "employees-by-department", {
    params: {
      department: `${departmentData}`,
    }
  });

  return response.data;
};

// Get Employee by Department Name
const getEmployee = async (departmentData) => {
  console.log(departmentData)
  const response = await axios.get(API_URL);

  const employees = response.data

  const selectedEmployees = employees.filter((employee) => employee.department !== departmentData)

  return selectedEmployees;
};

// Delete an employee
const deleteEmployee = async (employeeId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + employeeId, config);

  return response.data;
};

const employeeService = {
  createEmployee,
  getEmployeeByDep,
  getEmployees,
  getEmployee,
  deleteEmployee,
};

export default employeeService;
