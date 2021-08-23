import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: "0",
    backgroundColor: theme.palette.primary.main,
    padding: "10px 0",
  },
  text: {
    color: "#ffffff",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography className={classes.text}>
        Sell It created by Bartosz Grochal
      </Typography>
    </footer>
  );
};

export default Footer;
