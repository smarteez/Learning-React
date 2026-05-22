/* eslint-disable @typescript-eslint/no-explicit-any */

import { Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

/**
 * Reusable DateField Component
 *
 * A fully controlled MUI DatePicker integrated with React Hook Form.
 * Supports disabled state, ISO date values, and consistent formatting.
 *
 * PARAMETERS:
 * @param control - (required) React Hook Form control object.
 *                  Type: Control<FieldValues>
 *
 * @param name - (required) The field name registered in RHF.
 *               Type: string
 *               Example: "activationDate"
 *
 * @param label - (required) The UI label displayed above the date picker.
 *                Type: string
 *                Example: "Activation Date"
 *
 * @param disabled - (optional) Disables the date picker.
 *                   Type: boolean
 *                   Default: false
 *
 * POSSIBLE VALUES:
 *  - value: string | null (ISO date format: "2024-05-17")
 *  - disabled: true | false
 *
 * NOTES:
 * - Format updated to dd-MM-yyyy as requested.
 * - The DatePicker returns a Dayjs object; RHF stores it as-is.
 * - Convert to ISO string on submit if needed.
 */
interface DateFieldProps {
  control: any;
  name: string;
  label: string;
  disabled?: boolean;
}

export const DateField = ({
  control,
  name,
  label,
  disabled = false,
}: DateFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DatePicker
          {...field}
          label={label}
          format="dd-MM-yyyy"   // ✅ Updated format
          disabled={disabled}
        />
      )}
    />
  );
};
