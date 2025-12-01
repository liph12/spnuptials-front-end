import { Box, Container, Grid } from "@mui/material";
import { useAppContext } from "../../providers/AppProvider";
import StyledTextLight from "../utils/StyledTextLight";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { Link } from "react-router-dom";

export default function Footer() {
  const { desktop } = useAppContext();

  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "#0d2933",
          py: 4,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ display: desktop ? "flex" : "block", gap: 10 }}>
            <Box sx={{ width: desktop ? "30vw" : "100%", mb: desktop ? 0 : 5 }}>
              <StyledTextLight>CONTACT US</StyledTextLight>
              <Box sx={{ mt: 2 }}>
                <Box
                  sx={{
                    mb: 1.5,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FacebookRoundedIcon sx={{ color: "#f5fdff" }} />
                  <StyledTextLight fontSize={desktop ? 16 : 13}>
                    /plibres1
                  </StyledTextLight>
                </Box>
                <Box
                  sx={{
                    mb: 1.5,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <ContactMailRoundedIcon sx={{ color: "#f5fdff" }} />
                  <StyledTextLight fontSize={desktop ? 16 : 13}>
                    libresphilip14@gmail.com
                  </StyledTextLight>
                </Box>
                <Box
                  sx={{
                    mb: 1.5,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <CallTwoToneIcon sx={{ color: "#f5fdff" }} />
                  <StyledTextLight fontSize={desktop ? 16 : 13}>
                    +639677705320
                  </StyledTextLight>
                </Box>
                <Box
                  sx={{
                    mb: 1.5,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <CallTwoToneIcon sx={{ color: "#f5fdff" }} />
                  <StyledTextLight fontSize={desktop ? 16 : 13}>
                    +639755078561
                  </StyledTextLight>
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: desktop ? "30vw" : "100%" }}>
              <StyledTextLight>EXPLORE MORE</StyledTextLight>
              <Box sx={{ mt: 2 }}>
                <Box
                  sx={{
                    mb: 1.5,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <ChurchOutlinedIcon sx={{ color: "#f5fdff" }} />
                  <Link to="/about" style={{ textDecoration: "none" }}>
                    <StyledTextLight fontSize={desktop ? 16 : 13}>
                      Nuptials · /about
                    </StyledTextLight>
                  </Link>
                </Box>
                <Box
                  sx={{
                    mb: 1.5,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <ListOutlinedIcon sx={{ color: "#f5fdff" }} />
                  <Link to="/about/details" style={{ textDecoration: "none" }}>
                    <StyledTextLight fontSize={desktop ? 16 : 13}>
                      Details · /about/details
                    </StyledTextLight>
                  </Link>
                </Box>
                <Box
                  sx={{
                    mb: 1.5,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FmdGoodOutlinedIcon sx={{ color: "#f5fdff" }} />
                  <Link to="/about/venue" style={{ textDecoration: "none" }}>
                    <StyledTextLight fontSize={desktop ? 16 : 13}>
                      Venue · /about/venue
                    </StyledTextLight>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          height: "8vh",
          width: "100%",
          backgroundColor: "#07171c",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledTextLight>
          &copy; All Rights Reserved | P&S Nuptials {new Date().getFullYear()}
        </StyledTextLight>
      </Box>
    </>
  );
}
