import { Box, Typography, Button, Container } from "@mui/material";
import DrawerAppBar from "./layouts/DrawerAppBar";
import Content from "./layouts/Content";
import HeroBG from "../assets/ps-bg-hero-about.jpg";
import BottomVerticalBG from "../assets/ps-bg-bottom-verticial-v1.png";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { blue } from "@mui/material/colors";
import StyledLineSeparator from "./utils/StyledLineSeparator";
import StyledText from "./utils/StyledText";
import StyledTextCursiveSm from "./utils/StyledTextCursiveSm";
import { useRef } from "react";

export default function About() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = () => {
    targetRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
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
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <Box sx={{ textAlign: "center", width: "50vw" }}>
              <Typography
                variant="h1"
                sx={{
                  color: "#fff",
                  fontFamily: "Kapakana",
                  fontSize: 120,
                  fontWeight: 500,
                  lineHeight: 0.8,
                  fontOpticalSizing: "auto",
                  fontStyle: "normal",
                }}
              >
                Together, Always.
              </Typography>
              <StyledLineSeparator width={300} />
              <Typography
                variant="body1"
                component="div"
                sx={{
                  color: "#fff",
                  fontFamily: "Red Hat Display",
                  fontWeight: 500,
                  fontOpticalSizing: "auto",
                  fontStyle: "normal",
                  letterSpacing: "0.2rem",
                }}
              >
                We invite you to explore our story, discover the details of our
                ceremony and reception, and celebrate with us as we start this
                new chapter.
              </Typography>
              <Box sx={{ mt: 5 }}>
                <Button
                  disableElevation
                  variant="contained"
                  size="large"
                  startIcon={<ArrowDownwardOutlinedIcon />}
                  onClick={scrollToSection}
                  sx={{
                    borderRadius: 0,
                    fontFamily: "Red Hat Display",
                    letterSpacing: "0.2rem",
                  }}
                >
                  Explore
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          ref={targetRef}
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${BottomVerticalBG})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingY: 5,
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Container maxWidth="sm" sx={{ paddingTop: 3, paddingBottom: 8 }}>
              <Typography
                variant="h1"
                sx={{
                  color: blue[900],
                  fontFamily: "Kapakana",
                  fontSize: 90,
                  fontWeight: 500,
                  lineHeight: 0.8,
                  fontOpticalSizing: "auto",
                  fontStyle: "normal",
                }}
              >
                Libres - Castro
              </Typography>
              <StyledText>NUPTIALS</StyledText>
              <StyledLineSeparator width={250} color={blue[900]} />
              <StyledText>
                In gratitude to God who brought us together and with the
                Blessings of our Beloved parents.
              </StyledText>
              <Box sx={{ my: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Allan M. Libres</StyledText>
                  <StyledText>Salvador F. Castro</StyledText>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Algen Joy L. Nayre</StyledText>
                  <StyledText>Helen R. Castro</StyledText>
                </Box>
              </Box>
              <Box sx={{ my: 3 }}>
                <Typography
                  variant="h1"
                  sx={{
                    color: blue[900],
                    fontFamily: "Kapakana",
                    fontSize: 60,
                    fontWeight: 500,
                    lineHeight: 0.8,
                    fontOpticalSizing: "auto",
                    fontStyle: "normal",
                  }}
                >
                  Principal Sponsors
                </Typography>
                <StyledText fontSize={13}>
                  TO STAND AS WITNESS TO OUR VOWS
                </StyledText>
              </Box>
              <Box sx={{ my: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Cpt. Alberto R. Vergara</StyledText>
                  <StyledText>Mrs. Lilibeth F. Vergara</StyledText>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Hon. Benito A. Beray</StyledText>
                  <StyledText>Mrs. Dionisia P. Beray</StyledText>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Hon. Danilo Castro</StyledText>
                  <StyledText>Hon. Merlie S. Tabudlong</StyledText>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Hon. Raffy Dedal</StyledText>
                  <StyledText>Mrs. Madelyn Dedal</StyledText>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Mr. Ruhuel Libres</StyledText>
                  <StyledText>Mrs. Lea Libres</StyledText>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Mr. Benjamin Ejada</StyledText>
                  <StyledText>Mrs. Gleceria Ejada</StyledText>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Mr. Titulano Libres</StyledText>
                  <StyledText>Mrs. Honoria Urdaneta</StyledText>
                </Box>
              </Box>
              <Box sx={{ my: 3 }}>
                <Typography
                  variant="h1"
                  sx={{
                    color: blue[900],
                    fontFamily: "Kapakana",
                    fontSize: 60,
                    fontWeight: 500,
                    lineHeight: 0.8,
                    fontOpticalSizing: "auto",
                    fontStyle: "normal",
                  }}
                >
                  Entourage
                </Typography>
              </Box>
              <Box sx={{ my: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledTextCursiveSm>Best Man</StyledTextCursiveSm>
                  <StyledTextCursiveSm>Maid of Honor</StyledTextCursiveSm>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Nelson D. Libres</StyledText>
                  <StyledText>Marmi Jane Taboada</StyledText>
                </Box>
              </Box>
              <Box sx={{ my: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledTextCursiveSm>Groomsmen</StyledTextCursiveSm>
                  <StyledTextCursiveSm>Bridesmaid</StyledTextCursiveSm>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Zhedryl R. Castro</StyledText>
                  <StyledText>Kharlyn L. Nayre</StyledText>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Xhander R. Castro</StyledText>
                  <StyledText>Steffany A. Libres</StyledText>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Ivan L. Nayre</StyledText>
                  <StyledText>Leah Ejada</StyledText>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Ace Wendell L. Nayre</StyledText>
                  <StyledText>Precious Mae Urdaneta</StyledText>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Jecomar Boyonas</StyledText>
                  <StyledText>Jerah Mae Guimbal</StyledText>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText> Jan Marcel Fernandez</StyledText>
                  <StyledText>Lizzly Ejada</StyledText>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>John Mark C. Nitro</StyledText>
                  <StyledText>Karleen Faye Castro</StyledText>
                </Box>
              </Box>
              <Box sx={{ my: 3 }}>
                <Box sx={{ my: 2 }}>
                  <StyledTextCursiveSm>Light Bearers</StyledTextCursiveSm>
                  <StyledText fontSize={13}>
                    TO LIGHT OUR PATH TO RIGHTEOUSNESS
                  </StyledText>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Mr. Alfred Elison</StyledText>
                  <StyledText>Ms. Pinky Shanyne Lirasan</StyledText>
                </Box>
              </Box>
              <Box sx={{ my: 3 }}>
                <StyledText fontSize={13}>
                  TO CARRY OUR SYMBOL OF FAITH
                </StyledText>
              </Box>
              <Box sx={{ my: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledTextCursiveSm>Bible Bearer</StyledTextCursiveSm>
                  <StyledTextCursiveSm>Covenant Bearer</StyledTextCursiveSm>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledText>Axel B. Aragon</StyledText>
                  <StyledText>Johan Miles L. Mayone</StyledText>
                </Box>
              </Box>
              <Box sx={{ my: 3 }}>
                <Box sx={{ my: 2 }}>
                  <StyledTextCursiveSm>Flower Girls</StyledTextCursiveSm>
                  <StyledText fontSize={13}>
                    TO SHOWER THE AISLE WITH FLOWERS
                  </StyledText>
                </Box>
                <StyledText>Princess Jhylyne Braga</StyledText>
                <StyledText>Althea P. Castro</StyledText>
                <StyledText>Ann Murraine L. Mayone</StyledText>
                <Box sx={{ my: 2 }}>
                  <StyledTextCursiveSm>
                    Officiating Minister
                  </StyledTextCursiveSm>
                  <StyledText>Ptr. Jessie M. Garzon</StyledText>
                </Box>
                <Box sx={{ my: 2 }}>
                  <StyledTextCursiveSm>Singer</StyledTextCursiveSm>
                  <StyledText fontSize={13}>
                    TO SET THE MOOD AND TONE FOR OUR SPECIAL DAY
                  </StyledText>
                  <StyledText>Ms. Nelsie Asilum</StyledText>
                </Box>
              </Box>
              <StyledLineSeparator width={250} color={blue[900]} />
            </Container>
          </Box>
        </Box>
      </Content>
    </DrawerAppBar>
  );
}
