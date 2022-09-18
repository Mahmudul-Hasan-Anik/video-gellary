import axios from "../../utils/axios";

export const getVideo = async () => {
  const response = await axios.get("/videos");
  return response.data;
};
