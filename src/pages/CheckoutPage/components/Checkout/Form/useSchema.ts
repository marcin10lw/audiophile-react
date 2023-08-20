import { ZodType, z } from "zod";
import { FormData } from "./types";

const useSchema = (paymentMethod: string) => {
  const schema: ZodType<FormData> = z.object({
    name: z.string().min(1, { message: "Required" }),
    email: z.string().email({ message: "Wrong format" }),
    phone: z.string().min(9, { message: "Wrong format" }),
    address: z.string().min(1, { message: "Required" }),
    zipCode: z.string().min(1, { message: "Wrong format" }),
    city: z.string().min(1, { message: "Required" }),
    country: z.string().min(1, { message: "Required" }),
    eMoneyNumber:
      paymentMethod === "eMoney"
        ? z.string().min(1, { message: "Wrong format" })
        : z.string().optional(),
    eMoneyPin:
      paymentMethod === "eMoney"
        ? z.string().min(1, { message: "Wrong format" })
        : z.string().optional(),
  });

  return schema;
};

export default useSchema;
