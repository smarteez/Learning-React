/* eslint-disable @typescript-eslint/no-explicit-any */

import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

/**
 * Reusable NumberField Component
 *
 * A fully controlled numeric MUI TextField integrated with React Hook Form.
 * Supports min, max, step, and optional formatting.
 *
 * PARAMETERS:
 * @param control - (required) React Hook Form control object.
 *                  Type: Control<FieldValues>
 *
 * @param name - (required) The field name registered in RHF.
 *               Type: string
 *               Example: "price"
 *
 * @param label - (required) The UI label displayed above the input.
 *                Type: string
 *                Example: "Price"
 *
 * @param min - (optional) Minimum allowed value.
 *              Type: number
 *              Default: undefined
 *
 * @param max - (optional) Maximum allowed value.
 *              Type: number
 *              Default: undefined
 *
 * @param step - (optional) Step increment.
 *               Type: number
 *               Default: 1
 *
 * @param disabled - (optional) Disables the input.
 *                   Type: boolean
 *                   Default: false
 *
 * NOTES:
 * - RHF stores the numeric value directly.
 * - If the value is empty, it becomes null.
 * - Ideal for price, quantity, stock, weight, etc.
 */
interface NumberFieldProps {
  control: any;
  name: string;
  label: string;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}

export const NumberField = ({
  control,
  name,
  label,
  min,
  max,
  step = 1,
  disabled = false,
}: NumberFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          type="number"
          disabled={disabled}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          inputProps={{
            min,
            max,
            step,
          }}
          onChange={(e) => {
            const value = e.target.value;
            field.onChange(value === "" ? null : Number(value));
          }}
        />
      )}
    />
  );
};
