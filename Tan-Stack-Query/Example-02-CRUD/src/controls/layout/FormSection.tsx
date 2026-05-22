import Box from "@mui/material/Box";

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FormSection = ({ title, children }: FormSectionProps) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ fontWeight: 600, mb: 2 }}>{title}</Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)", // ⬅ THIS IS THE FIX
          gap: 2,
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
