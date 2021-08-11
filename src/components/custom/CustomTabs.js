//This container contains the example of using spinner before

import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import Div from "../Div";
import ImgList from "../ImgList";
import { Container } from "@material-ui/core";

function Videos({ items }) {
  console.log(items);
  return (
    <Grid container spacing={2} justifyContent="center">
      {items.map((element, index) => (
        <Grid item key={index}>
          <Div imgsrc={element.image_url} />
        </Grid>
      ))}
    </Grid>
  );
}
function Pictures({ items }) {
  console.log(items);
  return (
    <Grid container spacing={2} justifyContent="center">
      {items.map((element, index) => (
        <Grid item key={index}>
          <Div imgsrc={element.small} />
        </Grid>
      ))}
    </Grid>
  );
}
function Episodes({ items }) {
  console.log(items);
  return <h1>episodes</h1>;
}

function Characters({ items }) {
  console.log(items);
  return (
    <Grid container spacing={2} justifyContent="center">
      {items.map((element, index) => (
        <Grid item key={index}>
          <Div imgsrc={element.image_url} />
        </Grid>
      ))}
    </Grid>
  );
}
function Staff({ items }) {
  console.log(items);
  return (
    <Grid container spacing={2} justifyContent="center">
      {items.map((element, index) => (
        <Grid item key={index}>
          <Div imgsrc={element.image_url} />
        </Grid>
      ))}
    </Grid>
  );
}

function Reviews({ items }) {
  console.log(items);
  return (
    <Grid container spacing={2} justifyContent="center">
      {items.map((element, index) => (
        <Grid item key={index}>
          <Div imgsrc={element.reviewer.image_url} />
        </Grid>
      ))}
    </Grid>
  );
}
function Recommendations({ items }) {
  console.log(items);
  return (
    <Grid container spacing={2} justifyContent="center">
      {items
        .filter((item, idx) => idx < 15)
        .map((element, index) => (
          <Grid item key={index}>
            <Div imgsrc={element.image_url} />
          </Grid>
        ))}
    </Grid>
  );
}

export {
  Videos,
  Pictures,
  Episodes,
  Characters,
  Staff,
  Reviews,
  Recommendations,
};
