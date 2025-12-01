import DrawerAppBar from "./layouts/DrawerAppBar";
import Content from "./layouts/Content";
import { Box } from "@mui/material";
import StyledText from "./utils/StyledText";
import Footer from "./layouts/Footer";

export default function Faqs() {
  return (
    <>
      <DrawerAppBar>
        <Content>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StyledText variant="h5">Page is Under Construction.</StyledText>
          </Box>
        </Content>
      </DrawerAppBar>
      <Footer />
    </>
  );
}
