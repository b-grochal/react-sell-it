import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import SignInForm from "../components/user/SignInForm";

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
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <SignInForm />
      </Grid>
    </Grid>
  );
};

export default SignInPage;
