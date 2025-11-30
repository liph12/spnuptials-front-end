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

const drawerWidth = 240;
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
    label: "VENUE",
    path: "/venue",
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

export default function DrawerAppBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item, key) => (
          <ListItem key={key} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" elevation={0} color="default">
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
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
                color: blue[900],
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
            {navItems.map((item, key) => (
              <Link key={key} to={item.path}>
                <Button
                  disableElevation
                  sx={{
                    color: "#000",
                    fontFamily: "Red Hat Display",
                    letterSpacing: "0.2rem",
                    textTransform: "none",
                    borderRadius: 0,
                    borderBottom:
                      currentPath === item.path
                        ? `3px solid ${blue[800]}`
                        : "none",
                    mx: 1,
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
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
