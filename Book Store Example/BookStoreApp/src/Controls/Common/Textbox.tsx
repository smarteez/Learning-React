import { TextField } from "@mui/material";

interface TextboxProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
}

export const Textbox = ({label, value, onChange }: TextboxProps) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      fullWidth
    />
  );
};
