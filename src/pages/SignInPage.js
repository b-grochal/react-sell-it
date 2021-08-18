import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
});

const SignInPage = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <span>Sign In Page</span>
      </Grid>
    </Grid>
  );
};

export default SignInPage;
