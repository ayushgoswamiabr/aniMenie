import React from "react";
import {
  Typography,
  Paper,
  makeStyles,
  Grid,
  Container,
} from "@material-ui/core";
import RowType from "./RowType";

function Top({
  title,
  score,
  synopsis,
  image,
  subtitle,
  rank,
  popularity,
  members,
  scored_by,
  type,
  source,
  episodes,
  duration,
  studios,
  genres,
  status,
}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* // for first 2 divs of above */}
      <Grid container className={classes.child1}>
        <Grid item xs={12} md={3}>
          <div className={classes.rootImg}>
            <div
              className={classes.divRoot}
              style={{
                backgroundImage: "url(" + image + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={9}>
          <div className={classes.root}>
            {/* rooot1  */}

            <div className={classes.root1}>
              <Typography variant="h4">{title}</Typography>
              <Typography
                color="textSecondary"
                variant="h6"
                fontWeight="fontWeightLight"
                fontStyle="oblique"
              >
                {subtitle}
              </Typography>
            </div>
            {/* root2 */}

            <div className={classes.root2}>
              <div className={classes.synopsisBar}>
                <Typography variant="h6">Synopsis</Typography>
                {/* all row types for ranked items */}
                <div className={classes.rankBar}>
                  <RowType name="Ranked" value={rank} />
                  <RowType name="Popularity" value={popularity} />
                  <RowType name="Members" value={members} />
                </div>
              </div>

              <Typography variant="body2" color="textSecondary">
                {synopsis}
              </Typography>
              <Typography variant="body1"> score={score}</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      {/* //for scores and extra information */}

      <Grid container>
        <Grid item xs={2}>
          <div className={classes.score}>
            <Typography variant="h5">Score</Typography>
            <Typography variant="h3">{score}</Typography>
            <Typography variant="body1">Users</Typography>
          </div>
        </Grid>
        <Grid item xs={10}>
          <div className={classes.rankBar}>
            <RowType name="Type" value={type} />
            <RowType name="Status" value={status} />
            <RowType name="Genres" value="genres" />
            <RowType name="Episodes" value={episodes} />
          </div>
          <div className={classes.rankBar}>
            <RowType name="Type" value={type} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  child1: {
    paddingBottom: theme.spacing(5),
  },
  rootImg: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
  },
  root1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(2),
  },
  root2: {},
  divRoot: {
    maxWidth: 250,
    maxHeight: 350,
    [theme.breakpoints.down("md")]: {
      maxWidth: 150,
      maxHeight: 200,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 112,
      maxHeight: 170,
    },
    width: 250,
    height: 350,
    // width: "92%",
    borderRadius: 7,
  },
  rankBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: theme.spacing(2),
  },
  synopsisBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  score: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    backgroundColor: "grey",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 7,
    marginTop: theme.spacing(2),
    padding: theme.spacing(8),
  },
}));

export default Top;

// background image grid

// <Grid item xs={12} md={2}>
//         <div
//           className={classes.divRoot}
//           style={{
//             backgroundImage: "url(" + image + ")",
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//           }}
//         />
//       </Grid>
