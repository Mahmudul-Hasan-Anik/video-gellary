import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/filter/filterSlice";
import { fatchTag } from "../../features/tags/tagSlice";
import Tag from "./Tag";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fatchTag());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(reset());
  };

  return tags?.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags.map((tag) => (
          <Tag key={tag.id} title={tag.title} />
        ))}
        <div
          className=" ml-96 bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer hover:bg-red-600"
          onClick={handleClick}
        >
          Reset
        </div>
      </div>
    </section>
  ) : null;
};

export default Tags;
