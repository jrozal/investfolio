import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  appBar: {
    background: '#FFFFFF',
    boxShadow: `0 0 8px rgba(0,0,0,0.11)`
  },
  toolBar: {
    height: '6rem'
  },

  heading: {
    fontFamily: "'Pacifico', cursive !important",
    fontSize: '1.7rem !important',
    margin: 'auto',
    color: '#00BE70'
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Typography>
          <span className={classes.heading}>investfolio</span>
          <span>Total Assets</span>
          <span>Today's Change</span>
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

export default Header;