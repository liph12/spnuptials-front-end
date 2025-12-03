import DrawerAppBar from "./layouts/DrawerAppBar";
import Content from "./layouts/Content";
import { Box, Container } from "@mui/material";
import Footer from "./layouts/Footer";
import HeroBG from "../assets/ps-bg-hero-home-v1.png";
import FaqsAccordion from "./utils/FaqsAccordion";

export default function Faqs() {
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
            }}
          >
            <Container maxWidth="md">
              <FaqsAccordion />
            </Container>
          </Box>
        </Content>
      </DrawerAppBar>
      <Footer />
    </>
  );
}
