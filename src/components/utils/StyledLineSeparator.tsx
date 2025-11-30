import { Box } from "@mui/material";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";

interface StyledLineSeparatorProps {
  width?: number;
  color?: string;
}

export default function StyledLineSeparator({
  width = 100,
  color = "#fff",
}: StyledLineSeparatorProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        marginY: 2,
      }}
    >
      <Box
        sx={{
          height: 2,
          width: width,
          backgroundColor: color,
          borderRadius: 20,
        }}
      />
      <SpaOutlinedIcon fontSize="large" sx={{ color: color }} />
      <Box
        sx={{
          height: 2,
          width: width,
          backgroundColor: color,
          borderRadius: 20,
        }}
      />
    </Box>
  );
}
