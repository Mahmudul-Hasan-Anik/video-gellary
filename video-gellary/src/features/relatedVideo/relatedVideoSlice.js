import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideo } from "./relatedVideoAPI";

const initialState = {
  relatedVideo: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fatchRelatedVideo = createAsyncThunk(
  "relatedVideo/fatchRelatedVideo",
  async ({ tags, id }) => {
    const relatedVideo = await getRelatedVideo({ tags, id });
    return relatedVideo;
  }
);

const relatedVideoSlice = createSlice({
  name: "relateVideo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fatchRelatedVideo.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fatchRelatedVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideo = action.payload;
      })
      .addCase(fatchRelatedVideo.rejected, (state, action) => {
        state.isError = true;
        state.relatedVideo = [];
        state.error = action.error.message;
      });
  },
});

export default relatedVideoSlice.reducer;
