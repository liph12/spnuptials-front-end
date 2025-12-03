import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { blue } from "@mui/material/colors";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppContext } from "../../providers/AppProvider";
import { Divider } from "@mui/material";
import BottomVerticalBG from "../../assets/ps-bg-bottom-vertical-v2.jpeg";

const drawerWidth = 280;
const navItems = [
  {
    label: "WELCOME",
    path: "/",
  },
  {
    label: "ABOUT",
    path: "/about",
  },
  {
    label: "GALLERY",
    path: "/gallery",
  },
  {
    label: "FAQs",
    path: "/faqs",
  },
];

const checkIsLight = (path: string) =>
  ["/", "/about", "/about/details", "/about/venue"].includes(path);

export default function DrawerAppBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isLight = checkIsLight(currentPath);
  const { isSectionVisible } = useAppContext();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography
        variant="body1"
        component="div"
        sx={{
          color: blue[900],
          fontFamily: "Kapakana",
          fontWeight: 500,
          fontOpticalSizing: "auto",
          lineHeight: 0.7,
          fontStyle: "normal",
          fontSize: 30,
          margin: 2,
        }}
      >
        Philip & Sharlyn
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, key) => (
          <ListItem key={key} disablePadding component={Link} to={item.path}>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: {
                    fontFamily: "Red Hat Display",
                    lineHeight: "0.8",
                    letterSpacing: 3,
                    color: "#000",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        elevation={0}
        color="transparent"
        sx={{
          backgroundColor: `rgba(0,0,0,${
            isLight ? (isSectionVisible ? 0.5 : 0) : 0
          })`,
          transition: "0.5s",
        }}
      >
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
              color: isLight ? "#fff" : blue[900],
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Typography
              variant="body1"
              component="div"
              sx={{
                color: isLight ? "#fff" : blue[900],
                fontFamily: "Kapakana",
                fontWeight: 500,
                fontOpticalSizing: "auto",
                lineHeight: 0.7,
                fontStyle: "normal",
                fontSize: 30,
              }}
            >
              Philip & Sharlyn
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, key) => {
              const isRoot = item.path === "/" && currentPath === "/";

              return (
                <Link key={key} to={item.path}>
                  <Button
                    disableElevation
                    sx={{
                      color: isLight ? "#fff" : "#000",
                      fontFamily: "Red Hat Display",
                      letterSpacing: "0.2rem",
                      textTransform: "none",
                      borderRadius: 0,
                      borderBottom: isRoot
                        ? `3px solid #fff`
                        : currentPath.includes(item.path)
                        ? item.path !== "/"
                          ? `3px solid ${isLight ? "#fff" : blue[800]}`
                          : "none"
                        : "none",
                      mx: 1,
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundImage: `url(${BottomVerticalBG})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ width: "100vw" }}>
        {children}
      </Box>
    </Box>
  );
}
