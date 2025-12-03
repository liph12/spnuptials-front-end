import DrawerAppBar from "./layouts/DrawerAppBar";
import Content from "./layouts/Content";
import { Box, Typography, IconButton, Modal, Fade } from "@mui/material";
import StyledLineSeparator from "./utils/StyledLineSeparator";
import Footer from "./layouts/Footer";
import HeroBG from "../assets/ps-bg-hero-home-v1.png";
import { useAppContext } from "../providers/AppProvider";
import { blue } from "@mui/material/colors";
import { ChevronLeft, ChevronRight, Close } from "@mui/icons-material";
import GalleryGrid from "./layouts/GalleryGrid";
import { useState } from "react";

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const { desktop } = useAppContext();

  const galleryImages = [
    {
      id: 1,
      src: "/ps-bg-hero-about.jpg",
      title: "Photos captured in VSU",
      category: "Prenup",
      height: 600,
    },
  ];

  const handlePrevious = () => {
    setSelectedImageIndex((prev) =>
      prev === null
        ? galleryImages.length - 1
        : prev === 0
        ? galleryImages.length - 1
        : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) =>
      prev === null ? 0 : prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <DrawerAppBar>
        <Content>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${HeroBG})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 10,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <Box
                sx={{ textAlign: "center", width: desktop ? "50vw" : "95vw" }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: blue[900],
                    fontFamily: "Kapakana",
                    fontSize: desktop ? 120 : 80,
                    fontWeight: 500,
                    lineHeight: 0.8,
                    fontOpticalSizing: "auto",
                    fontStyle: "normal",
                  }}
                >
                  Our Love Story
                </Typography>
                <StyledLineSeparator
                  width={desktop ? 250 : 120}
                  color={blue[900]}
                />
                <Typography
                  variant={desktop ? "body1" : "body2"}
                  component="div"
                  sx={{
                    color: "#000",
                    fontFamily: "Red Hat Display",
                    fontWeight: 500,
                    fontOpticalSizing: "auto",
                    fontStyle: "normal",
                    letterSpacing: desktop ? "0.2rem" : "0.1rem",
                  }}
                >
                  Captured moments from the most beautiful day of our lives.
                  Every photograph tells a story of love, joy, and celebration.
                </Typography>
                <GalleryGrid
                  images={galleryImages}
                  onImageClick={setSelectedImageIndex}
                />
                <Modal
                  open={selectedImageIndex !== null}
                  onClose={() => setSelectedImageIndex(null)}
                  closeAfterTransition
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(4px)",
                    background: "rgba(0, 0, 0, 0.85)",
                  }}
                >
                  <Fade in={selectedImageIndex !== null}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 2,
                      }}
                    >
                      {selectedImageIndex !== null && (
                        <>
                          {/* Main Image */}
                          <Box
                            component="img"
                            src={galleryImages[selectedImageIndex].src}
                            alt={galleryImages[selectedImageIndex].title}
                            sx={{
                              maxWidth: "90%",
                              maxHeight: "90vh",
                              objectFit: "contain",
                              borderRadius: "4px",
                            }}
                          />

                          {/* Image Info */}
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 32,
                              left: 32,
                              color: "white",
                              zIndex: 1,
                            }}
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 300,
                                letterSpacing: "0.5px",
                                fontSize: "1.1rem",
                              }}
                            >
                              {galleryImages[selectedImageIndex].title}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                opacity: 0.7,
                                fontSize: "0.875rem",
                                letterSpacing: "0.3px",
                              }}
                            >
                              {selectedImageIndex + 1} / {galleryImages.length}
                            </Typography>
                          </Box>

                          {/* Navigation Buttons */}
                          <IconButton
                            onClick={handlePrevious}
                            sx={{
                              position: "absolute",
                              left: 16,
                              top: "50%",
                              transform: "translateY(-50%)",
                              color: "white",
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              backdropFilter: "blur(10px)",
                              "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                              },
                              transition: "all 0.3s ease",
                            }}
                          >
                            <ChevronLeft fontSize="medium" />
                          </IconButton>

                          <IconButton
                            onClick={handleNext}
                            sx={{
                              position: "absolute",
                              right: 16,
                              top: "50%",
                              transform: "translateY(-50%)",
                              color: "white",
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              backdropFilter: "blur(10px)",
                              "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                              },
                              transition: "all 0.3s ease",
                            }}
                          >
                            <ChevronRight fontSize="medium" />
                          </IconButton>
                          <IconButton
                            onClick={() => setSelectedImageIndex(null)}
                            sx={{
                              position: "absolute",
                              top: 16,
                              right: 16,
                              color: "white",
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              backdropFilter: "blur(10px)",
                              "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                              },
                              transition: "all 0.3s ease",
                            }}
                          >
                            <Close fontSize="medium" />
                          </IconButton>
                        </>
                      )}
                    </Box>
                  </Fade>
                </Modal>
              </Box>
            </Box>
          </Box>
        </Content>
      </DrawerAppBar>
      <Footer />
    </>
  );
}
