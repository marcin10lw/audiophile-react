import axios from "axios";

type Image = {
  desktop: string;
  tablet: string;
  mobile: string;
};

export type ProductType = {
  id: number;
  new: boolean;
  name: string;
  description: string;
  categoryImage: Image;
  image: Image;
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
