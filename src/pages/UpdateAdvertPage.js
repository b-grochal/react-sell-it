import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import UpdateAdvertForm from "../components/adverts/UpdateAdvertForm";
import { useDispatch, useSelector } from "react-redux";
import { detailsAdvert } from "../actions/advertActions";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
});

const UpdateAdvertPage = () => {
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
        <UpdateAdvertForm />
      </Grid>
    </Grid>
  );
};

export default UpdateAdvertPage;
