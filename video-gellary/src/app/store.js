import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/videos/videoSlice";
import tagsReducer from "../features/tags/tagSlice";
import singleVideoReducer from "../features/singleVideo/singleVideoSlice";

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    tags: tagsReducer,
    video: singleVideoReducer,
  },
});
