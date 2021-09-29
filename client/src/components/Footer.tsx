import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    float: 'right',
    bottom: 0,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    color: '#3c4858',

    '& a': {
      textDecoration: 'none',
      fontWeight: 700
    }
  }
})

const Footer = () => {
  const classes = useStyles();
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className={classes.footer}>
      <span>
        &copy; {year} <a href="https://justinrozal.dev" target="_blank" rel="noopener noreferrer" aria-label="Open personal portfolio for Justin Rozal">Justin Rozal</a>
      </span>
    </footer>
  )
};

export default Footer;