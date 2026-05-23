/* eslint-disable @typescript-eslint/no-explicit-any */

import { Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

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
          label={label}
          value={field.value ? dayjs(field.value) : null}
          onChange={(newValue) =>
            field.onChange(newValue ? newValue.toISOString() : null)
          }
          format="DD-MM-YYYY"
          disabled={disabled}
        />
      )}
    />
  );
};
