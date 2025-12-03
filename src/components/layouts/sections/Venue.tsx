import { Box, Button, Container, Typography, Stack, Link } from "@mui/material";
import StyledText from "../../utils/StyledText";
import ChurchRoundedIcon from "@mui/icons-material/ChurchRounded";
import BrunchDiningRoundedIcon from "@mui/icons-material/BrunchDiningRounded";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import StyledLineSeparator from "../../utils/StyledLineSeparator";
import StyledTextCursiveSm from "../../utils/StyledTextCursiveSm";
import { useAppContext } from "../../../providers/AppProvider";
import { blue } from "@mui/material/colors";

export default function Venue() {
  const { desktop } = useAppContext();

  return (
    <Box sx={{ textAlign: "center" }}>
      <Container maxWidth="md" sx={{ paddingTop: 3, paddingBottom: 8 }}>
        <Typography
          variant="h1"
          sx={{
            color: blue[900],
            fontFamily: "Kapakana",
            fontSize: desktop ? 90 : 50,
            fontWeight: 500,
            lineHeight: 0.8,
            fontOpticalSizing: "auto",
            fontStyle: "normal",
          }}
        >
          The Venue
        </Typography>
        <StyledLineSeparator width={desktop ? 150 : 120} color={blue[900]} />
        <Box
          sx={{
            mt: 3,
            display: desktop ? "flex" : "block",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Box sx={{ mb: 3 }}>
            <StyledTextCursiveSm>Church</StyledTextCursiveSm>
            <ChurchRoundedIcon sx={{ fontSize: 60, color: blue[800], my: 4 }} />
            <StyledText fontSize={desktop ? 18 : 16}>
              Seventh-day Adventist Church
            </StyledText>
            <StyledText fontSize={desktop ? 18 : 16}>
              Hilapnitan, Baybay City, Leyte, 6521
            </StyledText>
            <Link
              href="https://maps.app.goo.gl/bsft8gomwemdUhgp8?g_st=ac"
              target="_blank"
            >
              <Button
                disableElevation
                variant="contained"
                size="small"
                sx={{
                  borderRadius: 0,
                  fontFamily: "Red Hat Display",
                  letterSpacing: "0.2rem",
                  mt: 3,
                }}
                startIcon={<ArrowOutwardIcon />}
              >
                Go to Church
              </Button>
            </Link>
          </Box>
          <Box sx={{ mb: 3 }}>
            <StyledTextCursiveSm>Reception</StyledTextCursiveSm>
            <BrunchDiningRoundedIcon
              sx={{ fontSize: 60, color: blue[800], my: 4 }}
            />
            <StyledText fontSize={desktop ? 18 : 16}>
              Caridad Gymnasium
            </StyledText>
            <StyledText fontSize={desktop ? 18 : 16}>
              Caridad, Baybay City, Leyte, 6521
            </StyledText>
            <Link
              href="https://maps.app.goo.gl/frZcxKoP3E2qBu2j6?g_st=ac"
              target="_blank"
            >
              <Button
                disableElevation
                variant="contained"
                size="small"
                sx={{
                  borderRadius: 0,
                  fontFamily: "Red Hat Display",
                  letterSpacing: "0.2rem",
                  mt: 3,
                }}
                startIcon={<ArrowOutwardIcon />}
              >
                Go to Reception
              </Button>
            </Link>
          </Box>
        </Box>
        <StyledLineSeparator width={desktop ? 400 : 120} color={blue[900]} />
      </Container>
    </Box>
  );
}
