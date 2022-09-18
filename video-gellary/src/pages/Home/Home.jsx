import React from "react";
import VideoGrid from "../../components/Grid/VideoGrid";
import Pagination from "../../components/Pagination/Pagination";
import Tags from "../../components/Tags/Tags";

const Home = () => {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
};

export default Home;
