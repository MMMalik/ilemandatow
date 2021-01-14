import * as React from "react";
import clsx from "clsx";
import { useTheme } from "../theme";
import Icon from "../icon";
import Tooltip from "../tooltip";

export type InputType = "text" | "number" | "color" | "hidden";

export interface Props {
  /**
   * Input field name.
   */
  name: string;
  /**
   * Input field value (used for controlled input).
   */
  value?: string | number;
  /**
   * Input field default value.
   */
  defaultValue?: string | number;
  /**
   * Input field html type.
   */
  type?: InputType;
  /**
   * Input field label.
   */
  label?: string;
  /**
   * Input field html placeholder.
   */
  placeholder?: string;
  /**
   * Helper text.
   */
  helperText?: string;
  /**
   * Optional root class name.
   */
  className?: string;
  /**
   * Marks input as required (UI only).
   */
  required?: boolean;
  /**
   * Disables all styling, helper texts, labels, etc.
   */
  bare?: boolean;
  /**
   * Html form id.
   */
  form?: string;
  /**
   * Callback fired on change (used for controlled input).
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Custom ref.
   */
  ref?: any;
}

const InputField: React.FC<Props> = React.forwardRef<any, Props>(
  (
    {
      name,
      value,
      defaultValue,
      className,
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
      <div className={className}>
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
            defaultValue={defaultValue}
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
