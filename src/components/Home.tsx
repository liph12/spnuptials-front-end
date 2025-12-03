import DrawerAppBar from "./layouts/DrawerAppBar";
import { Box, Typography, Stack, Button } from "@mui/material";
import HeroBGMobilev1 from "../assets/ps-bg-hero-home-v1.jpg";
import HeroBGv2 from "../assets/ps-bg-hero-home-v2.jpg";
import { useState, useEffect } from "react";
import Content from "./layouts/Content";
import StyledLineSeparator from "./utils/StyledLineSeparator";
import { Link } from "react-router-dom";
import StyledTextLight from "./utils/StyledTextLight";
import Footer from "./layouts/Footer";
import { useAppContext } from "../providers/AppProvider";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import InvitationModal from "./utils/InvitaionModal";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  const { desktop } = useAppContext();
  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-01-11T14:00:00+08:00");

    const timer = setInterval(() => {
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" })
      );

      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <InvitationModal />
      <DrawerAppBar>
        <Content>
          <Box
            sx={{
              width: "100%",
              height: desktop ? "120vh" : "100vh",
              backgroundImage: `url(${desktop ? HeroBGv2 : HeroBGMobilev1})`,
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
                height: desktop ? "120vh" : "100vh",
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
              <Stack sx={{ textAlign: "center" }} spacing={4}>
                <StyledTextLight variant={desktop ? "h5" : "h6"} lineHeight={3}>
                  THE WEDDING OF
                </StyledTextLight>
                <Box sx={{ width: "30vw", textAlign: "left" }}>
                  <Typography
                    variant="h1"
                    sx={{
                      color: "#fff",
                      fontFamily: "Kapakana",
                      fontSize: desktop ? 150 : 80,
                      fontWeight: 500,
                      fontOpticalSizing: "auto",
                      lineHeight: 0.5,
                      fontStyle: "normal",
                    }}
                  >
                    Philip
                  </Typography>
                </Box>
                <Typography
                  variant="h1"
                  sx={{
                    color: "#fff",
                    fontFamily: "Kapakana",
                    fontSize: desktop ? 130 : 60,
                    fontWeight: 500,
                    fontOpticalSizing: "auto",
                    lineHeight: 0.5,
                    fontStyle: "normal",
                  }}
                >
                  &
                </Typography>
                <Box
                  sx={{ width: desktop ? "30vw" : "100%", textAlign: "right" }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      color: "#fff",
                      fontFamily: "Kapakana",
                      fontSize: desktop ? 150 : 80,
                      fontWeight: 500,
                      fontOpticalSizing: "auto",
                      lineHeight: 0.5,
                      fontStyle: "normal",
                    }}
                  >
                    Sharlyn
                  </Typography>
                </Box>
                <StyledLineSeparator width={desktop ? 200 : 120} color="#fff" />
                <StyledTextLight variant="h5" lineHeight={0.7}>
                  01 · 11 · 2026 · 2PM
                </StyledTextLight>
                <StyledTextLight variant="body1" lineHeight={0.7}>
                  {countdown.days} DAYS · {countdown.hours} H ·{" "}
                  {countdown.minutes} M · {countdown.seconds} S
                </StyledTextLight>
                <Box>
                  <Link to="/about">
                    <Button
                      disableElevation
                      variant="contained"
                      size="large"
                      sx={{
                        borderRadius: 0,
                        fontFamily: "Red Hat Display",
                        letterSpacing: "0.2rem",
                      }}
                      startIcon={<ArrowOutwardIcon />}
                    >
                      View Details
                    </Button>
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Content>
      </DrawerAppBar>
      <Footer />
    </>
  );
}
