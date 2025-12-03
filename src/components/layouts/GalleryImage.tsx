import { useState } from "react";
import { Box, Typography } from "@mui/material";

interface ImageProps {
  image: {
    id: number;
    src: string;
    title: string;
    category: string;
    height: number;
  };
  index: number;
  onClick: () => void;
}

export default function GalleryImage({ image, index, onClick }: ImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
        cursor: "pointer",
        backgroundColor: "#caf2fc",
        aspectRatio: "3 / 4",
        animation: `fadeInImage 0.6s ease-out ${0.1 * index}s both`,
        "@keyframes fadeInImage": {
          from: {
            opacity: 0,
            transform: "scale(0.95)",
          },
          to: {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={image.src}
        alt={image.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: 300,
            fontSize: "0.95rem",
            letterSpacing: "0.3px",
          }}
        >
          {image.title}
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "0.8rem",
            letterSpacing: "0.2px",
            marginTop: "0.5rem",
          }}
        >
          {image.category}
        </Typography>
      </Box>
    </Box>
  );
}
