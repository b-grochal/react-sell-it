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
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
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
        SELL IT created by Bartosz Grochal &copy;
      </Typography>
    </footer>
  );
};

export default Footer;
