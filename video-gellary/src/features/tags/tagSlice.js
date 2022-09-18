import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTag } from "./tagAPI";

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fatchTag = createAsyncThunk("tags/fatchTag", async () => {
  const tags = await getTag();
  return tags;
});

const tagSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fatchTag.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fatchTag.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fatchTag.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.tags = [];
        state.error = action.error?.message;
      });
  },
});

export default tagSlice.reducer;
