import axios from "axios";

export type ProductType = {
  id: number;
  new: boolean;
  name: string;
  description: string;
  categoryImage: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  slug: string;
  category: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
};

const wait = (exampleDelay: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, exampleDelay);
  });

export const getProducts = async () => {
  await wait(1000);
  const { data } = await axios.get(`${process.env.PUBLIC_URL}/data.json`);
  return data as ProductType[];
};
