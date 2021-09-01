import { LinearProgress, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    height: "100%",
    width: "100%",
  },
});

const LoadingScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <LinearProgress />
    </div>
  );
};

export default LoadingScreen;
