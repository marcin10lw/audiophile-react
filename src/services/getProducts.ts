import axios from "axios";
import { QueryFunction } from "@tanstack/react-query";
import { wait } from "@testing-library/user-event/dist/utils";

import { ProductAPIResponse } from "fakeAPIResponseTypes";

export const getProducts: QueryFunction<
  ProductAPIResponse,
  ["products"]
> = async () => {
  await wait(500);
  const { data } = await axios.get(`${process.env.PUBLIC_URL}/data.json`);

  return data;
};
