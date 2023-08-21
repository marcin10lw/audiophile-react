import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import useSchema from "./useSchema";
import { FormData, Status } from "./types";
import { useForm } from "react-hook-form";
import { fakeSendData } from "services/fakeSendData";

const formInitialState: FormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  eMoneyNumber: "",
  eMoneyPin: "",
};

const useCustomForm = (submitCallback: () => void) => {
  const [paymentMethod, setPaymentMethod] = useState("eMoney");
  const [status, setStatus] = useState<Status>("idle");
  const schema = useSchema(paymentMethod);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: formInitialState,
    resolver: zodResolver(schema),
  });

  const onFormSubmit = async (formData: FormData) => {
    setStatus("loading");

    try {
      await fakeSendData();
      setStatus("success");
      submitCallback();
      reset();
    } catch (error) {
      setStatus("error");
    }
  };

  return {
    paymentMethod,
    status,
    errors,
    register,
    setPaymentMethod,
    handleSubmit,
    onFormSubmit,
  };
};

export default useCustomForm;
