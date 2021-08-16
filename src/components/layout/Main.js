import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  main: {
    flex: "1 0 auto",
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <span>Main</span>;
    </main>
  );
};

export default Main;
