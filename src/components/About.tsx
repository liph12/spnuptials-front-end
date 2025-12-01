import { Box, Typography, Button } from "@mui/material";
import DrawerAppBar from "./layouts/DrawerAppBar";
import Content from "./layouts/Content";
import HeroBG from "../assets/ps-bg-hero-about.jpg";
import BottomVerticalBG from "../assets/ps-bg-bottom-vertical-v2.jpeg";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import StyledLineSeparator from "./utils/StyledLineSeparator";
import { useAppContext } from "../providers/AppProvider";
import Footer from "./layouts/Footer";
import Nuptials from "./layouts/sections/Nuptials";
import Details from "./layouts/sections/Details";
import Venue from "./layouts/sections/Venue";
import { useLocation, Link } from "react-router-dom";

const navItems = [
  {
    label: "Nuptials",
    path: "/about",
    icon: <ChurchOutlinedIcon />,
  },
  {
    label: "Details",
    path: "/about/details",
    icon: <ListOutlinedIcon />,
  },
  {
    label: "Venue",
    path: "/about/venue",
    icon: <FmdGoodOutlinedIcon />,
  },
];

const AboutContent = ({ path }: { path: string }) => {
  switch (path) {
    case "/about":
      return <Nuptials />;
    case "/about/details":
      return <Details />;
    case "/about/venue":
      return <Venue />;
  }
};

export default function About() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { sectionRef, desktop } = useAppContext();

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
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
              <Box
                sx={{ textAlign: "center", width: desktop ? "50vw" : "95vw" }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: "#fff",
                    fontFamily: "Kapakana",
                    fontSize: desktop ? 120 : 80,
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
                  variant={desktop ? "body1" : "body2"}
                  component="div"
                  sx={{
                    color: "#fff",
                    fontFamily: "Red Hat Display",
                    fontWeight: 500,
                    fontOpticalSizing: "auto",
                    fontStyle: "normal",
                    letterSpacing: desktop ? "0.2rem" : "0.1rem",
                  }}
                >
                  We invite you to explore our story, discover the details of
                  our ceremony and reception, and celebrate with us as we start
                  this new chapter.
                </Typography>
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    gap: 1,
                    justifyContent: "center",
                  }}
                >
                  {navItems.map((item, key) => (
                    <Link to={item.path} key={key}>
                      <Button
                        disableElevation
                        size={desktop ? "large" : "small"}
                        startIcon={item.icon}
                        onClick={scrollToSection}
                        sx={{
                          color: "#fff",
                          borderRadius: 0,
                          fontFamily: "Red Hat Display",
                          letterSpacing: "0.2rem",
                          textTransform: "none",
                          borderBottom:
                            currentPath === item.path
                              ? `3px solid #fff`
                              : "none",
                        }}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            ref={sectionRef}
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
            <AboutContent path={currentPath} />
          </Box>
        </Content>
      </DrawerAppBar>
      <Footer />
    </>
  );
}
