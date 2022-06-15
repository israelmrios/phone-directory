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

const departmentService = {
  createDepartment,
};

export default departmentService;
