import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  heading: {
    fontFamily: "'Pacifico', cursive !important",
    fontSize: '30px !important',
    margin: 'auto'
  }
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar style={{ background: '#2b6777' }}>
      <Toolbar>
        <Typography className={classes.heading}>
          investfolio
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

export default Navbar;