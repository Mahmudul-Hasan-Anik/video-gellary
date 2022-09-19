import axios from "../../utils/axios";

export const getRelatedVideo = async ({ id, tags }) => {
  const limit = 5;

  const quaryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;

  const response = await axios.get(`/videos?${quaryString}`);
  return response.data;
};
