import axios from "axios";
import { ProductType } from "./types";

const wait = (exampleDelay: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, exampleDelay);
  });

export const getProducts = async () => {
  await wait(1000);
  const { data } = await axios.get(`${process.env.PUBLIC_URL}/data.json`);
  return data as ProductType[];
};
