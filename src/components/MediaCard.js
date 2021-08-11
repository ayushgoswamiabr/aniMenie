import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: 400,
    width: "100%",
  },

  media: {
    height: 400,
    width: "100%",
  },
});

export default function MediaCard({ title, imgsrc }) {
  const classes = useStyles();

  return (
    <Card elevation={2} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgsrc}
          title="Contemplative Reptile"
          gutterBottom
        />
      </CardActionArea>
    </Card>
  );
}
