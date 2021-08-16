import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: "0",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography>Sell It created by Bartosz Grochal</Typography>
    </footer>
  );
};

export default Footer;
