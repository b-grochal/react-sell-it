import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAdverts } from "../../actions/advertActions";
import { Grid, Container } from "@material-ui/core";
import Advert from "./Advert";

const AdvertsList = () => {
  const dispatch = useDispatch();
  const advertList = useSelector((state) => state.advertList);
  const { adverts, loading, error } = advertList;

  useEffect(() => {
    dispatch(listAdverts());
  }, []);

  return (
    <Container>
      {loading ? (
        <span>Loading</span>
      ) : (
        <Grid container spacing={3}>
          {adverts.map((advert) => (
            <Grid item xs={12} md={6} lg={4} key={advert.advertId}>
              <Advert advert={advert} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default AdvertsList;
