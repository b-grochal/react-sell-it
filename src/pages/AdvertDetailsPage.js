import { Button, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsAdvert } from "../actions/advertActions";
import { useHistory } from "react-router-dom";
import AdvertDetails from "../components/adverts/AdvertDetails";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },
}));

const AdvertDetailsPage = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const advertId = props.match.params.id;
  const dispatch = useDispatch();
  const advertDetails = useSelector((state) => state.advertDetails);
  const { advert, loading, error } = advertDetails;

  const goBackHandler = () => {
    history.goBack();
  };

  useEffect(() => {
    dispatch(detailsAdvert(advertId));
  }, []);

  return (
    <Container className={classes.container}>
      {loading ? (
        <span>Loading</span>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <AdvertDetails advert={advert} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <span>Adverts details {advertId}</span>;
            </Paper>
          </Grid>
          <Grid item container xs={12} justifyContent="flex-end">
            <Button color="primary" variant="contained" onClick={goBackHandler}>
              Back
            </Button>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default AdvertDetailsPage;
