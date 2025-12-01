import { Box, Container, Typography, Grid, Avatar } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useAppContext } from "../../../providers/AppProvider";
import StyledLineSeparator from "../../utils/StyledLineSeparator";
import StyledText from "../../utils/StyledText";
import StyledTextCursiveMd from "../../utils/StyledTextCursiveMd";
import guestsAttire from "../../../assets/ps-guests-attire-v2.png";
import sponsorsAttire from "../../../assets/ps-sponsors-attire-v2.png";
import gcash from "../../../assets/ps-gcash.jpeg";
import bpi from "../../../assets/ps-bpi.jpeg";

const hexColors = ["#81d4fa", "#b3e5fc", "#e1f5fe", "#fcfeff", "#fff"];

export default function Details() {
  const { desktop } = useAppContext();

  return (
    <Box sx={{ textAlign: "center" }}>
      <Container maxWidth="sm" sx={{ paddingTop: 3, paddingBottom: 8 }}>
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
          The Details
        </Typography>
        <StyledLineSeparator width={250} color={blue[900]} />
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
          Attire Guide
        </Typography>
        <StyledText fontSize={desktop ? 17 : 15}>
          We would love to see you in your <b>SEMI-FORMAL</b>. We encourage you
          to dress according to our wedding color.
        </StyledText>
        <Box
          sx={{
            mt: 3,
            marginLeft: 5,
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {hexColors.map((c, index) => (
            <Box
              key={index}
              sx={{
                height: desktop ? 50 : 40,
                width: desktop ? 50 : 40,
                border: "1px solid #eee",
                borderRadius: "50%",
                backgroundColor: c,
                position: "relative",
                left: index === 0 ? 0 : -10 * index,
                zIndex: hexColors.length - index,
              }}
            />
          ))}
        </Box>
        <Box sx={{ mt: 3 }}>
          <StyledTextCursiveMd>Guests</StyledTextCursiveMd>
          <img src={guestsAttire} height={desktop ? 300 : 200} />
        </Box>
        <Box sx={{ mt: 3 }}>
          <StyledTextCursiveMd>Principal Sponsors</StyledTextCursiveMd>
          <img src={sponsorsAttire} height={desktop ? 300 : 200} />
          <StyledText fontSize={desktop ? 17 : 15}>
            Gentlemen: Traditional Barong with Black Pants Ladies: Floor-length
            gown / Dress
          </StyledText>
        </Box>
        <StyledLineSeparator width={250} color={blue[900]} />
        <Box sx={{ mt: 3 }}>
          <StyledTextCursiveMd>A note on gifts</StyledTextCursiveMd>
          <StyledText fontSize={desktop ? 17 : 15}>
            With all that we have, we have truly been blessed. If you were
            thinking of giving us gifts to help us on our way, monetary gift
            would really make our day. Regardless of what you decide to do, know
            that the most important gift you can bring is yourself.
          </StyledText>
          <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
            <Grid container spacing={5} justifyContent="center">
              <Grid
                size={{ lg: 6, md: 6, sm: 12 }}
                container
                direction="column"
                alignItems="center"
                textAlign="center"
              >
                <Avatar
                  src={gcash}
                  sx={{ height: desktop ? 300 : 200, width: "auto", mb: 1 }}
                  variant="rounded"
                />
                <Box>
                  <StyledText fontSize={desktop ? 17 : 15}>
                    09294612396
                  </StyledText>
                  <StyledText fontSize={desktop ? 17 : 15}>
                    <b>GCASH</b>
                  </StyledText>
                </Box>
              </Grid>
              <Grid
                size={{ lg: 6, md: 6, sm: 12 }}
                container
                direction="column"
                alignItems="center"
                textAlign="center"
              >
                <Avatar
                  src={bpi}
                  sx={{ height: desktop ? 300 : 200, width: "auto", mb: 1 }}
                  variant="rounded"
                />
                <Box>
                  <StyledText fontSize={desktop ? 17 : 15}>
                    0659105077
                  </StyledText>
                  <StyledText fontSize={desktop ? 17 : 15}>
                    <b>BPI</b>
                  </StyledText>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <StyledLineSeparator width={250} color={blue[900]} />
      </Container>
    </Box>
  );
}
