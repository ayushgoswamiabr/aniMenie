import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

function DummyScreen() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      {Array.from(new Array(30)).map((element, index) => (
        <Grid item sm={4} md={3} lg key={index}>
          <Skeleton variant="rect" className={classes.divRoot} />
          <Skeleton width="60%" />
        </Grid>
      ))}
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  divRoot: {
    maxWidth: 250,
    maxHeight: 300,
    [theme.breakpoints.down("md")]: {
      maxWidth: 150,
      maxHeight: 200,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 112,
      maxHeight: 170,
    },
    width: 200,
    height: 250,
    // width: "92%",
    borderRadius: 7,
    marginBottom: 50,
  },
}));

export default DummyScreen;
