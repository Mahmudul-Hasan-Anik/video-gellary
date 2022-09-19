import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RelatedVideoList from "../../components/List/RelatedVideoList";
import RelatedVideo from "../../components/List/RelatedVideo";
import LikeUnlike from "../../components/List/LikeUnlike";
import { fatchSingleVideo } from "../../features/singleVideo/singleVideoSlice";
import { Loading } from "../../components/ui/Loading";

const Description = () => {
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  const dispatch = useDispatch();
  const { videoId } = useParams();

  useEffect(() => {
    dispatch(fatchSingleVideo(videoId));
  }, [dispatch, videoId]);

  const { link, title, date, description, likes, unlikes, id, tags } =
    video || {};

  // Decide what to render

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className=" col-span-12"> {error}</div>;

  if (!isLoading && !isError && !video?.id)
    content = <div className=" col-span-12">No video Found </div>;

  if (!isLoading && !isError && video?.id)
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          {/* VIDEO PLAYER */}
          <RelatedVideo link={link} title={title} />

          {/* VIDEO DESCRIPTION  */}
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-800">
              {title}
            </h1>
            <div className="pb-4 flex items-center space-between border-b">
              <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                Uploaded on {date}
              </h2>

              <LikeUnlike likes={likes} unlikes={unlikes} />
            </div>

            <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
              {description}
            </div>
          </div>
        </div>
        <RelatedVideoList id={id} tags={tags} />
      </div>
    );

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
};

export default Description;
