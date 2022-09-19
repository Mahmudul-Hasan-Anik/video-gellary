import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/videos/videoSlice";
import tagsReducer from "../features/tags/tagSlice";
import singleVideoReducer from "../features/singleVideo/singleVideoSlice";
import relatedVideoReducer from "../features/relatedVideo/relatedVideoSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    tags: tagsReducer,
    video: singleVideoReducer,
    relatedVideo: relatedVideoReducer,
    filter: filterReducer,
  },
});
