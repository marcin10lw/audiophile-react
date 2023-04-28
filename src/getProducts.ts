import axios from "axios";

export const getProducts = async () => {
  const { data } = await axios.get(`${process.env.PUBLIC_URL}/data.json`);
  return data;
};
