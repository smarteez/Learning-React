/* eslint-disable @typescript-eslint/no-explicit-any */

import { Controller } from "react-hook-form";
import { TextField, MenuItem, CircularProgress, Box } from "@mui/material";

interface DropDownProps {
  control: any;
  name: string;
  label: string;
  options: { label: string; value: number | string }[];
  disabled?: boolean;
  loading?: boolean; // ⬅ NEW
}

export const DropDown = ({
  control,
  name,
  label,
  options,
  disabled = false,
  loading = false, // ⬅ NEW
}: DropDownProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const safeValue =
          field.value === undefined || field.value === null
            ? 0
            : field.value;

        return (
          <TextField
            {...field}
            value={safeValue}
            select
            label={label}
            fullWidth
            disabled={disabled || loading} // ⬅ disable while loading
            InputProps={{
              endAdornment: loading ? (
                <Box sx={{ display: "flex", alignItems: "center", pr: 2 }}>
                  <CircularProgress size={20} />
                </Box>
              ) : null,
            }}
          >
            {/* LOADING OPTION */}
            {loading && (
              <MenuItem value={0} disabled>
                Loading...
              </MenuItem>
            )}

            {/* NORMAL OPTIONS */}
            {!loading &&
              options.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))}
          </TextField>
        );
      }}
    />
  );
};
