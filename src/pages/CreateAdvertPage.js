import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import CreateAdvertForm from "../components/adverts/CreateAdvertForm";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
});

const CreateAdvertPage = () => {
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
        <CreateAdvertForm />
      </Grid>
    </Grid>
  );
};

export default CreateAdvertPage;
