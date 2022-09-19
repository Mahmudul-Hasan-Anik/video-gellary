import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fatchRelatedVideo } from "../../features/relatedVideo/relatedVideoSlice";
import { Loading } from "../ui/Loading";

const RelatedVideoList = ({ id, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideo, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideo
  );

  useEffect(() => {
    dispatch(fatchRelatedVideo({ id, tags }));
  }, [dispatch, id, tags]);

  // Decide what to render
  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <div className=" col-span-12"> {error}</div>;
  }
  if (!isLoading && !isError && relatedVideo?.length === 0) {
    content = <div className=" col-span-12">No Video Found</div>;
  }

  if (!isLoading && !isError && relatedVideo?.length > 0) {
    content = relatedVideo.map((video) => (
      <div className="w-full flex flex-row gap-2 mb-4" key={video.id}>
        <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
          <Link to={`/video/${video.id}`}>
            <img
              src={video.thumbnail}
              className="object-cover"
              alt={video.title}
            />
          </Link>
          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {video.duration}
          </p>
        </div>

        <div className="flex flex-col w-full">
          <Link to={`/video/${video.id}`}>
            <p className="text-slate-900 text-sm font-semibold">
              {video.title}
            </p>
          </Link>
          <Link
            className="text-gray-400 text-xs mt-2 hover:text-gray-600"
            to={`/video/${video.id}`}
          >
            {video.author}
          </Link>
          <p className="text-gray-400 text-xs mt-1">
            {" "}
            {video.views} views . {video.date}
          </p>
        </div>
      </div>
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;
