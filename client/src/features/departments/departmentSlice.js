import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import departmentService from "./departmentService";

const initialState = {
  departments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Add a new Department
export const createDepartment = createAsyncThunk(
  "departments/create",
  async (departmentData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await departmentService.createDepartment(departmentData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDepartment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createDepartment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.departments.push(action.payload);
      })
      .addCase(createDepartment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = departmentSlice.actions;
export default departmentSlice.reducer;
