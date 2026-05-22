/* eslint-disable @typescript-eslint/no-explicit-any */

import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

interface SKUFieldProps {
  control: any;
  name: string;
  label?: string;
}

export const SKUField = ({
  control,
  name,
  label = "SKU",
}: SKUFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          InputProps={{ readOnly: true }}
        />
      )}
    />
  );
};
