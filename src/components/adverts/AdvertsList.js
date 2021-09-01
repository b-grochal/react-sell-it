import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAdverts } from "../../actions/advertActions";
import { Grid, Container, makeStyles } from "@material-ui/core";
import Advert from "./Advert";
import LoadingScreen from "../utils/LoadingScreen";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },
}));

const AdvertsList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const advertList = useSelector((state) => state.advertList);
  const { adverts, loading, error } = advertList;

  useEffect(() => {
    dispatch(listAdverts());
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Container className={classes.container}>
          <Grid container spacing={3}>
            {adverts.map((advert) => (
              <Grid item xs={12} md={6} lg={4} key={advert.advertId}>
                <Advert advert={advert} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default AdvertsList;
