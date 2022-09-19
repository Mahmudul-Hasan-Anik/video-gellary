import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoAPI";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fatchVideo = createAsyncThunk(
  "videos/fatchVideo",
  async ({ tags, search }) => {
    const videos = await getVideo({ tags, search });
    return videos;
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fatchVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fatchVideo.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fatchVideo.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.videos = [];
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
