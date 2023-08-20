export type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  eMoneyNumber?: string;
  eMoneyPin?: string;
};

export type Status = "idle" | "loading" | "success" | "error";
