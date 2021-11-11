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
          fontSize: "2rem",
          margin: "auto",
          color: "#313BF3",
          background: 'linear-gradient(90deg, rgba(49,59,243,1) 35%, rgba(130,137,255,1) 100%)',
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          MozBackgroundClip: "text",
          MozTextFillColor: "transparent",
        }}
      >
        <span>investfolio</span>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;