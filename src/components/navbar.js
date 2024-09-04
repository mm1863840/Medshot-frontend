import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import oppositeLogo from "../images/logo.jpeg"; // Ensure the path is correct

const pages = ["Home", "About", "Hospitals", "Schools", "Brands"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#d7e2e0", color: "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Clickable Logo that redirects to the home page */}
          <Box
            component="a"
            href="/"
            sx={{
              height: 50,
              display: { xs: "none", md: "flex" },
              ml: "auto",
              marginRight: "20px",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "100%", // Adjusts image height to fill the parent Box
              }}
              alt="Opposite Logo"
              src={oppositeLogo}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              ml: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Chand (Moon) Icon */}
            <Brightness2Icon
              sx={{ color: "black", mr: 2, cursor: "pointer" }}
            />

            {/* Language Icon */}
            <LanguageIcon sx={{ color: "black", mr: 2, cursor: "pointer" }} />

            <Button
              className="login-button"
              variant="#6bc6b6"
              sx={{
                backgroundColor: "#6bc6b6",
                border: "none",
                borderRadius: "15px",
                color: "black"
              }}
            >
              Login/Signup
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
