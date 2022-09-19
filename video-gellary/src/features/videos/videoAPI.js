import axios from "../../utils/axios";
// ?tags_like=react&tags_like=tips&q=react

export const getVideo = async ({ tags, search }) => {
  let quaryString = "";

  if (tags.length > 0) {
    quaryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (search !== "") {
    quaryString += `&q=${search}`;
  }
  const response = await axios.get(`/videos?${quaryString}`);
  return response.data;
};
