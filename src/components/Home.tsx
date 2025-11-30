import DrawerAppBar from "./layouts/DrawerAppBar";
import { Box, Typography, Stack, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import HeroBG from "../assets/ps-bg-hero-home-v1.png";
import { useState, useEffect } from "react";
import Content from "./layouts/Content";
import StyledLineSeparator from "./utils/StyledLineSeparator";
import { Link } from "react-router-dom";
import StyledText from "./utils/StyledText";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
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
      <DrawerAppBar>
        <Content>
          <Box
            sx={{
              width: "100%",
              height: "95vh",
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 5,
              }}
            >
              <Stack sx={{ textAlign: "center" }} spacing={4}>
                <Typography
                  variant="h1"
                  sx={{
                    color: blue[800],
                    fontFamily: "Kapakana",
                    fontSize: 120,
                    fontWeight: 500,
                    fontOpticalSizing: "auto",
                    lineHeight: 0.5,
                    fontStyle: "normal",
                  }}
                >
                  Philip
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    color: blue[800],
                    fontFamily: "Kapakana",
                    fontSize: 130,
                    fontWeight: 500,
                    fontOpticalSizing: "auto",
                    lineHeight: 0.5,
                    fontStyle: "normal",
                  }}
                >
                  &
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    color: blue[800],
                    fontFamily: "Kapakana",
                    fontSize: 120,
                    fontWeight: 500,
                    fontOpticalSizing: "auto",
                    lineHeight: 0.5,
                    fontStyle: "normal",
                  }}
                >
                  Sharlyn
                </Typography>
                <StyledLineSeparator width={180} color={blue[900]} />
                <StyledText variant="h5" lineHeight={0.7}>
                  JANUARY 11, 2026 · 2PM
                </StyledText>
                <StyledText variant="body1" lineHeight={0.7}>
                  {countdown.days} DAYS · {countdown.hours} H ·{" "}
                  {countdown.minutes} M · {countdown.seconds} S
                </StyledText>
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
    </>
  );
}
