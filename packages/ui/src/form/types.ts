import {
  DeepPartial,
  UnpackNestedValue,
  RegisterOptions,
} from "react-hook-form";

export type FormValues<T> = UnpackNestedValue<DeepPartial<T>>;

export type FormRegisterOpts = RegisterOptions;

export type FormRegisterFn = (opts: FormRegisterOpts) => any;
