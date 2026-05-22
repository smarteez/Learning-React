import Box from "@mui/material/Box";

interface FormRowProps {
  children: React.ReactNode;
  xs?: number;
  md?: number;
}

export const FormRow = ({ children, xs = 12, md = 6 }: FormRowProps) => {
  return (
    <Box
      sx={{
        gridColumn: {
          xs: `span ${xs}`,
          md: `span ${md}`,
        },
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};
