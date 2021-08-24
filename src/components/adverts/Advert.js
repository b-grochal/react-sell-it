import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

const Advert = ({ advert }) => {
  return (
    <Card>
      <CardContent>
        <Typography>{advert.name}</Typography>
        <Typography>{advert.description}</Typography>
        <Typography>{advert.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Advert;
