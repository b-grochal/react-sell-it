import {
  CircularProgress,
  LinearProgress,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    height: 50,
  },
});

const LoadingScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CircularProgress className={classes.circle} />
    </div>
  );
};

export default LoadingScreen;
