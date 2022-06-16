import axios from "axios";

const API_URL = "/api/departments/";

// Add a new Department
const createDepartment = async (departmentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, departmentData, config);

  return response.data;
};

// Get Department Names
const getDepartments = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Delete a Department
const deleteDepartment = async (departmentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + departmentId, config);

  return response.data;
};

const departmentService = {
  createDepartment,
  getDepartments,
  deleteDepartment,
};

export default departmentService;
