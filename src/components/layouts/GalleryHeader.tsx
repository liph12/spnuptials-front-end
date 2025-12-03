import { Box, Typography } from "@mui/material";

export default function GalleryHeader() {
  return (
    <Box
      sx={{
        textAlign: "center",
        mb: 8,
        animation: "fadeInDown 0.8s ease-out",
        "@keyframes fadeInDown": {
          from: {
            opacity: 0,
            transform: "translateY(-20px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "3.5rem" },
          fontWeight: 300,
          letterSpacing: "0.5px",
          mb: 2,
          color: "#2c2c2c",
          fontFamily: '"Playfair Display", serif',
        }}
      >
        Our Love Story
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "0.95rem", md: "1.1rem" },
          color: "#666",
          maxWidth: "600px",
          mx: "auto",
          fontWeight: 300,
          letterSpacing: "0.3px",
          lineHeight: 1.6,
        }}
      >
        Captured moments from the most beautiful day of our lives. Every
        photograph tells a story of love, joy, and celebration.
      </Typography>

      <Box
        sx={{
          height: "1px",
          width: "60px",
          background: "#d4a574",
          mx: "auto",
          mt: 3,
        }}
      />
    </Box>
  );
}
