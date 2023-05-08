export type Image = {
  desktop: string;
  tablet: string;
  mobile: string;
};

export type RecommendedProductType = {
  image: Image;
  name: string;
  slug: string;
};

export type ProductType = {
  id: number;
  new: boolean;
  name: string;
  price: number;
  description: string;
  categoryImage: Image;
  image: Image;
  gallery: {
    first: Image;
    second: Image;
    third: Image;
  };
  others: RecommendedProductType[];
  slug: string;
  category: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
};
