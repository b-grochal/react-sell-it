import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const Advert = ({ advert }) => {
  return (
    <Card>
      <CardContent>
        <Typography>{advert.name}</Typography>
        <Typography>{advert.description}</Typography>
        <Typography>{advert.price}</Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`adverts/${advert.advertId}`} size="small">
          Detials
        </Button>
      </CardActions>
    </Card>
  );
};

export default Advert;
