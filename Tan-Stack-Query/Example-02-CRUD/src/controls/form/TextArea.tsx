/* eslint-disable @typescript-eslint/no-explicit-any */

import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

/**
 * Reusable TextArea Component
 *
 * A fully controlled multiline MUI TextField integrated with React Hook Form.
 * Supports auto-resize, optional row count, and optional character counter.
 *
 * PARAMETERS:
 * @param control - (required) React Hook Form control object.
 *                  Type: Control<FieldValues>
 *
 * @param name - (required) The field name registered in RHF.
 *               Type: string
 *               Example: "description"
 *
 * @param label - (required) The UI label displayed above the textarea.
 *                Type: string
 *                Example: "Description"
 *
 * @param rows - (optional) Minimum number of rows.
 *               Type: number
 *               Default: 3
 *
 * @param maxLength - (optional) Maximum allowed characters.
 *                    Type: number
 *                    Default: undefined (no limit)
 *
 * @param disabled - (optional) Disables the textarea.
 *                   Type: boolean
 *                   Default: false
 *
 * NOTES:
 * - Auto-resizes based on content.
 * - If maxLength is provided, a character counter appears.
 * - RHF manages the value; this component only displays it.
 */
interface TextAreaProps {
  control: any;
  name: string;
  label: string;
  rows?: number;
  maxLength?: number;
  disabled?: boolean;
}

export const TextArea = ({
  control,
  name,
  label,
  rows = 3,
  maxLength,
  disabled = false,
}: TextAreaProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const value = field.value ?? "";

        return (
          <TextField
            {...field}
            label={label}
            fullWidth
            multiline
            minRows={rows}
            disabled={disabled}
            error={!!fieldState.error}
            helperText={
              fieldState.error?.message ??
              (maxLength ? `${value.length}/${maxLength}` : "")
            }
            inputProps={{
              maxLength,
            }}
          />
        );
      }}
    />
  );
};
