import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import departmentReducer from "../features/departments/departmentSlice";
import employeeReducer from "../features/employees/employeeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    departments: departmentReducer,
    employees: employeeReducer,
  },
});
