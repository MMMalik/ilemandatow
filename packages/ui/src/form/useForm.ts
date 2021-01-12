import { SubmitHandler, useForm as useRHForm } from "react-hook-form";
import { FormValues } from "./types";

interface Props<T> {
  onSubmit: SubmitHandler<FormValues<T>>;
  defaultValues: FormValues<T>;
  debug?: boolean;
}

const useForm = <T>({
  onSubmit,
  defaultValues,
  debug = process.env.NODE_ENV === "development",
}: Props<T>) => {
  const { handleSubmit, watch, register } = useRHForm({ defaultValues });

  if (debug) {
    const watchedValues = watch();
    console.info("Form: %o", watchedValues);
  }

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
  };
};

export default useForm;
