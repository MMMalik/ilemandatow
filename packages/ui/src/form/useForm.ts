import { SubmitHandler, useForm as useRHForm } from "react-hook-form";
import { FormValues } from "./types";

interface Props<T> {
  /**
   * Submit handler.
   */
  onSubmit: SubmitHandler<FormValues<T>>;
  /**
   * Form default / initial values.
   */
  defaultValues: FormValues<T>;
  /**
   * Helps debug form. Enabled in `development` by default.
   */
  debug?: boolean;
}

const useForm = <T>({
  onSubmit,
  defaultValues,
  debug = process.env.NODE_ENV === "development",
}: Props<T>) => {
  const { handleSubmit, watch, ...rest } = useRHForm({ defaultValues });

  if (debug) {
    const watchedValues = watch();
    /* eslint-disable-next-line */
    console.info("Form: %o", watchedValues);
  }

  return {
    onSubmit: handleSubmit(async (data) => {
      await onSubmit(data as any);
    }),
    watch,
    handleSubmit,
    ...rest,
  };
};

export default useForm;
