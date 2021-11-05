import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => (
  <AppBar
    sx={{
      background: "#FFFFFF",
      boxShadow: "0 0 8px rgba(0,0,0,0.11)",
    }}
  >
    <Toolbar
      sx={{
        height: "6rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Pacifico', cursive",
          fontSize: "1.7rem",
          margin: "auto",
          color: "#00BE70",
        }}
      >
        <span>investfolio</span>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;