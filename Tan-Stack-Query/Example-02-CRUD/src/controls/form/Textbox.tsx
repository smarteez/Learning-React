import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

/**
 * Reusable Textbox Component
 *
 * A fully controlled MUI TextField integrated with React Hook Form.
 * Supports text, number, email, password, multiline, read-only, disabled,
 * and custom onChange logic.
 *
 * PARAMETERS:
 * @param control - (required) React Hook Form control object.
 *                  Type: Control<FieldValues>
 *
 * @param name - (required) The field name registered in RHF.
 *               Type: string
 *               Example: "product.name"
 *
 * @param label - (required) The UI label displayed above the textbox.
 *                Type: string
 *                Example: "Product Name"
 *
 * @param type - (optional) Input type.
 *               Type: "text" | "number" | "email" | "password"
 *               Default: "text"
 *
 * @param disabled - (optional) Disables the entire field.
 *                   Type: boolean
 *                   Default: false
 *
 * @param readOnly - (optional) Makes the field read-only.
 *                   Type: boolean
 *                   Default: false
 *
 * @param multiline - (optional) Enables multiline input.
 *                    Type: boolean
 *                    Default: false
 *
 * @param rows - (optional) Number of rows when multiline is true.
 *               Type: number
 *               Default: 1
 *
 * @param onChangeOverride - (optional) Custom callback triggered after RHF onChange.
 *                           Type: (value: string) => void
 *                           Example: (v) => console.log("Changed:", v)
 *
 * POSSIBLE VALUES:
 *  - type: "text", "number", "email", "password"
 *  - disabled: true | false
 *  - readOnly: true | false
 *  - multiline: true | false
 *  - rows: any integer >= 1
 *
 * NOTES:
 * - RHF validation errors automatically appear via fieldState.error.
 * - When readOnly=true, the user cannot modify the value but the field is still focusable.
 * - When disabled=true, the field is completely non-interactive.
 */
export interface TextboxProps {
  control: any;
  name: string;
  label: string;
  type?: "text" | "number" | "email" | "password";
  disabled?: boolean;
  readOnly?: boolean;
  multiline?: boolean;
  rows?: number;
  onChangeOverride?: (value: string) => void;
}

export const Textbox = ({
  control,
  name,
  label,
  type = "text",
  disabled = false,
  readOnly = false,
  multiline = false,
  rows = 1,
  onChangeOverride,
}: TextboxProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          fullWidth
          disabled={disabled}
          multiline={multiline}
          rows={rows}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          InputProps={{
            readOnly,
          }}
          onChange={(e) => {
            field.onChange(e);
            onChangeOverride?.(e.target.value);
          }}
        />
      )}
    />
  );
};
