import { Box, Container } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function Footer() {
  return (
    <Box sx={{ height: "20vh", width: "100%", backgroundColor: blue[100] }}>
      <Container maxWidth="md"></Container>
    </Box>
  );
}
