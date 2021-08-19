import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import SignUpForm from "../components/user/SignUpForm";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
});

const SignUpPage = () => {
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
        <SignUpForm />
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
