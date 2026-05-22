/* eslint-disable @typescript-eslint/no-explicit-any */

import { Controller } from "react-hook-form";
import { Switch, FormControlLabel } from "@mui/material";

/**
 * Reusable SwitchField Component
 *
 * A fully controlled MUI Switch integrated with React Hook Form.
 * Ideal for boolean fields such as Active, Published, Featured, etc.
 *
 * PARAMETERS:
 * @param control - (required) React Hook Form control object.
 *                  Type: Control<FieldValues>
 *
 * @param name - (required) The field name registered in RHF.
 *               Type: string
 *               Example: "isActive"
 *
 * @param label - (required) The label displayed next to the switch.
 *                Type: string
 *                Example: "Active"
 *
 * @param disabled - (optional) Disables the switch.
 *                   Type: boolean
 *                   Default: false
 *
 * NOTES:
 * - RHF stores the boolean value directly.
 * - Switch defaults to false if value is undefined.
 * - Fully consistent with your other reusable controls.
 */
interface SwitchFieldProps {
  control: any;
  name: string;
  label: string;
  disabled?: boolean;
}

export const SwitchField = ({
  control,
  name,
  label,
  disabled = false,
}: SwitchFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={
            <Switch
              checked={field.value ?? false}
              onChange={(e) => field.onChange(e.target.checked)}
              disabled={disabled}
            />
          }
          label={label}
        />
      )}
    />
  );
};
