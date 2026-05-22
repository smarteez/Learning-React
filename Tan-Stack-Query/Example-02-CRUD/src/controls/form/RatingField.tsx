/* eslint-disable @typescript-eslint/no-explicit-any */

import { Controller } from "react-hook-form";
import { Rating, FormControl, FormLabel } from "@mui/material";

export interface RatingFieldProps {
  control: any;
  name: string;
  label: string;
}

export const RatingField = ({ control, name, label }: RatingFieldProps) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Rating
            {...field}
            value={field.value ?? 0}
            onChange={(_, value) => field.onChange(value)}
          />
        )}
      />
    </FormControl>
  );
};
