import { Box, Container, Typography } from "@mui/material";
import StyledText from "../../utils/StyledText";
import StyledLineSeparator from "../../utils/StyledLineSeparator";
import StyledTextCursiveSm from "../../utils/StyledTextCursiveSm";
import { useAppContext } from "../../../providers/AppProvider";
import { blue } from "@mui/material/colors";

export default function Nuptials() {
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
          Libres - Castro
        </Typography>
        <StyledText>NUPTIALS</StyledText>
        <StyledLineSeparator width={250} color={blue[900]} />
        <StyledText fontSize={desktop ? 17 : 15}>
          In gratitude to God who brought us together and with the Blessings of
          our Beloved parents.
        </StyledText>
        <Box sx={{ my: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledText fontSize={desktop ? 16 : 13}>
              Allan M. Libres
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Salvador F. Castro
            </StyledText>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledText fontSize={desktop ? 16 : 13}>
              Algen Joy L. Nayre
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Helen R. Castro
            </StyledText>
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
          <StyledText fontSize={13}>TO STAND AS WITNESS TO OUR VOWS</StyledText>
        </Box>
        <Box sx={{ my: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledText fontSize={desktop ? 16 : 13}>
              Cpt. Alberto R. Vergara
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Mrs. Lilibeth F. Vergara
            </StyledText>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledText fontSize={desktop ? 16 : 13}>
              Hon. Benito A. Beray
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Mrs. Dionisia P. Beray
            </StyledText>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledText fontSize={desktop ? 16 : 13}>
              Hon. Danilo Castro
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Hon. Merlie S. Tabudlong
            </StyledText>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledText fontSize={desktop ? 16 : 13}>
              Hon. Raffy Dedal
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Mrs. Madelyn Dedal
            </StyledText>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledText fontSize={desktop ? 16 : 13}>
              Mr. Ruhuel Libres
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Mrs. Lea Libres
            </StyledText>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledText fontSize={desktop ? 16 : 13}>
              Mr. Benjamin Ejada
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Mrs. Gleceria Ejada
            </StyledText>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledText fontSize={desktop ? 16 : 13}>
              Mr. Titulano Libres
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Mrs. Honoria Urdaneta
            </StyledText>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledText fontSize={desktop ? 16 : 13}>
              Mr. Laren L.Pael
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Mrs. Marina S.Pael
            </StyledText>
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
            <StyledText fontSize={desktop ? 16 : 13}>
              Nelson D. Libres
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Marmi Jane Taboada
            </StyledText>
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
            <StyledText fontSize={desktop ? 16 : 13}>
              Zhedryl R. Castro
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Kharlyn L. Nayre
            </StyledText>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledText fontSize={desktop ? 16 : 13}>
              Xhander R. Castro
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Steffany A. Libres
            </StyledText>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledText fontSize={desktop ? 16 : 13}>Ivan L. Nayre</StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>Leah Ejada</StyledText>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledText fontSize={desktop ? 16 : 13}>
              Ace Wendell L. Nayre
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Precious Mae Urdaneta
            </StyledText>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledText fontSize={desktop ? 16 : 13}>
              Jecomar Boyonas
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Jerah Mae Guimbal
            </StyledText>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledText fontSize={desktop ? 16 : 13}>
              {" "}
              Jan Marcel Fernandez
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>Lizzly Ejada</StyledText>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledText fontSize={desktop ? 16 : 13}>
              John Mark C. Nitro
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Karleen Faye Castro
            </StyledText>
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
            <StyledText fontSize={desktop ? 16 : 13}>
              Mr. Alfred Elison
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Ms. Pinky Shanyne Lirasan
            </StyledText>
          </Box>
        </Box>
        <Box sx={{ my: 3 }}>
          <StyledText fontSize={13}>TO CARRY OUR SYMBOL OF FAITH</StyledText>
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
            <StyledText fontSize={desktop ? 16 : 13}>Axel B. Aragon</StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Johan Miles L. Mayone
            </StyledText>
          </Box>
        </Box>
        <Box sx={{ my: 3 }}>
          <Box sx={{ my: 2 }}>
            <StyledTextCursiveSm>Flower Girls</StyledTextCursiveSm>
            <StyledText fontSize={13}>
              TO SHOWER THE AISLE WITH FLOWERS
            </StyledText>
          </Box>
          <StyledText fontSize={desktop ? 16 : 13}>
            Princess Jhylyne Braga
          </StyledText>
          <StyledText fontSize={desktop ? 16 : 13}>Althea P. Castro</StyledText>
          <StyledText fontSize={desktop ? 16 : 13}>
            Ann Murraine L. Mayone
          </StyledText>
          <Box sx={{ my: 2 }}>
            <StyledTextCursiveSm>Officiating Minister</StyledTextCursiveSm>
            <StyledText fontSize={desktop ? 16 : 13}>
              Ptr. Jessie M. Garzon
            </StyledText>
          </Box>
          <Box sx={{ my: 2 }}>
            <StyledTextCursiveSm>Singer</StyledTextCursiveSm>
            <StyledText fontSize={13}>
              TO SET THE MOOD AND TONE FOR OUR SPECIAL DAY
            </StyledText>
            <StyledText fontSize={desktop ? 16 : 13}>
              Ms. Nelsie Asilum
            </StyledText>
          </Box>
        </Box>
        <StyledLineSeparator width={250} color={blue[900]} />
      </Container>
    </Box>
  );
}
