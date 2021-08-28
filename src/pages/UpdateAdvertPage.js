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

const UpdateAdvertPage = (props) => {
  const advertId = props.match.params.id;
  const classes = useStyles();
  const dispatch = useDispatch();
  const advertDetails = useSelector((state) => state.advertDetails);
  const { advert, loading, error } = advertDetails;

  useEffect(() => {
    dispatch(detailsAdvert(advertId));
  }, []);

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        {loading ? (
          <span>Loading</span>
        ) : (
          !error && <UpdateAdvertForm advert={advert} />
        )}
      </Grid>
    </Grid>
  );
};

export default UpdateAdvertPage;
