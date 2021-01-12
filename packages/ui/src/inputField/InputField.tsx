import * as React from "react";
import clsx from "clsx";
import { useTheme } from "../theme";
import Icon from "../icon";
import Tooltip from "../tooltip";

export type InputType = "text" | "number";

interface Props {
  name: string;
  value?: string | number;
  type?: InputType;
  label?: string;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
  bare?: boolean;
  form?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: any;
}

const InputField: React.FC<Props> = React.forwardRef<any, Props>(
  (
    {
      name,
      value,
      type = "text",
      label,
      placeholder,
      helperText,
      required,
      bare,
      form,
      onChange,
    },
    ref
  ) => {
    const { theme } = useTheme();
    const { textPrimary, textDivider, textMuted } = theme;

    return (
      <div>
        {label && !bare && (
          <label htmlFor={name} className="f6 db mb2">
            {label}
            {required && <span className="ml1">{"*"}</span>}
          </label>
        )}
        <div className="flex items-center">
          <input
            ref={ref}
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            form={form}
            onChange={onChange}
            className={clsx(
              `input-reset db w-100 bg-transparent ${textPrimary}`,
              bare ? "bn outline-0" : `br1 ba b--${textDivider} pa2`
            )}
          />
          {helperText && (
            <Tooltip title={helperText}>
              <Icon
                className={`ml2 ${textMuted}`}
                size="lg"
                icon={["far", "question-circle"]}
              />
            </Tooltip>
          )}
        </div>
      </div>
    );
  }
);

export default InputField;
