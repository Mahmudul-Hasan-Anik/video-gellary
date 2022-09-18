import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleVideo } from "./singleVideoAPI";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fatchSingleVideo = createAsyncThunk(
  "singleVideo/fatchSingleVideo",
  async (id) => {
    const singleVideo = await getSingleVideo(id);
    return singleVideo;
  }
);

const singleVideoSlice = createSlice({
  name: "single",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fatchSingleVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fatchSingleVideo.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fatchSingleVideo.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.video = {};
        state.error = action.error?.message;
      });
  },
});

export default singleVideoSlice.reducer;
