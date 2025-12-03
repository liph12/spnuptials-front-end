import { Box } from "@mui/material";
import GalleryImageComponent from "./GalleryImage";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  height: number;
}

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export default function GalleryGrid({
  images,
  onImageClick,
}: GalleryGridProps) {
  return (
    <Box
      sx={{
        mt: 5,
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        },
        gap: { xs: 2, md: 3 },
        animation: "fadeInUp 0.8s ease-out 0.2s both",
        "@keyframes fadeInUp": {
          from: {
            opacity: 0,
            transform: "translateY(20px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
    >
      {images.map((image, index) => (
        <GalleryImageComponent
          key={image.id}
          image={image}
          index={index}
          onClick={() => onImageClick(index)}
        />
      ))}
    </Box>
  );
}
