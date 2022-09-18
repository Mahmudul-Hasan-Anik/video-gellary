import axios from "../../utils/axios";

export const getTag = async () => {
  const response = await axios.get("/tags");
  return response.data;
};
