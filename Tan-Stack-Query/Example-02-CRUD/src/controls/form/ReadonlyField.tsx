/* eslint-disable @typescript-eslint/no-explicit-any */

import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

/**
 * Reusable ReadonlyField Component
 *
 * A fully controlled MUI TextField integrated with React Hook Form,
 * always displayed in read-only mode. Ideal for system-generated fields
 * such as CreatedAt, UpdatedAt, IDs, audit fields, etc.
 *
 * PARAMETERS:
 * @param control - (required) React Hook Form control object.
 *                  Type: Control<FieldValues>
 *
 * @param name - (required) The field name registered in RHF.
 *               Type: string
 *               Example: "createdAt"
 *
 * @param label - (required) The UI label displayed above the field.
 *                Type: string
 *                Example: "Created At"
 *
 * @param multiline - (optional) Enables multiline display.
 *                    Type: boolean
 *                    Default: false
 *
 * @param rows - (optional) Number of rows when multiline is true.
 *               Type: number
 *               Default: 1
 *
 * POSSIBLE VALUES:
 *  - value: string | number | null
 *  - multiline: true | false
 *  - rows: any integer >= 1
 *
 * NOTES:
 * - Field is ALWAYS read-only.
 * - Useful for timestamps, IDs, system-generated values.
 * - RHF manages the value; this component only displays it.
 */
interface ReadonlyFieldProps {
  control: any;
  name: string;
  label: string;
  multiline?: boolean;
  rows?: number;
}

export const ReadonlyField = ({
  control,
  name,
  label,
  multiline = false,
  rows = 1,
}: ReadonlyFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          multiline={multiline}
          rows={rows}
          InputProps={{
            readOnly: true,
            disabled: true,
          }}
        />
      )}
    />
  );
};
