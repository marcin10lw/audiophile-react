import { QueryFunction } from "@tanstack/react-query";
import axios from "axios";
import { ProductAPIResponse } from "../fakeAPIResponseTypes";
import { wait } from "@testing-library/user-event/dist/utils";

export const getProducts: QueryFunction<
  ProductAPIResponse,
  ["products"]
> = async () => {
  await wait(500);
  const { data } = await axios.get(`${process.env.PUBLIC_URL}/data.json`);

  return data;
};
