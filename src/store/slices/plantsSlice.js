import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import allApis from "../../service/api";

// cards
export const getAllPlants = createAsyncThunk(
  "plants/getPlants",
  async (_, { rejectWithValue }) => {
    try {
      const response = await allApis.getPlants();
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
  plant: [],
};

const plantsSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPlants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPlants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.plant = action.payload;
      })
      .addCase(getAllPlants.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = plantsSlice.actions;
export default plantsSlice.reducer;
