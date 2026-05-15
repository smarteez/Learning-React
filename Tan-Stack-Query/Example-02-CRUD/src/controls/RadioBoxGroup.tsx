/* eslint-disable @typescript-eslint/no-explicit-any */
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

interface RadioBoxGroupProps {
  label: string;
  selectedId: number | null;
  onChange?: (value: any) => void;
  items: any[];
}

export const RadioBoxGroup = ({
  label,
  selectedId,
  onChange,
  items,
}: RadioBoxGroupProps) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>

      <RadioGroup
        row
        value={selectedId}
        onChange={onChange}
      >
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
