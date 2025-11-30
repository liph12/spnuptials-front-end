import DrawerAppBar from "./layouts/DrawerAppBar";
import Content from "./layouts/Content";
import { Box } from "@mui/material";
import StyledText from "./utils/StyledText";

export default function Gallery() {
  return (
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
          <StyledText variant="h3">Page is Under Construction.</StyledText>
        </Box>
      </Content>
    </DrawerAppBar>
  );
}
