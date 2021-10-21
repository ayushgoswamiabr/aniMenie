import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

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
    width: 180,
    height: 220,
    // width: "92%",
    borderRadius: 7,
    marginBottom: 20,
  },
  link:{
    textDecoration:"none",
  },
  title:{
    width:'80%',
  },
}));

function Div({ imgsrc, id,title }) {
  const classes = useStyles();
  return (
    <NavLink to={{ pathname: "/custom", state: { id: id } }} className={classes.link}>
      <div
        className={classes.divRoot}
        style={{
          backgroundImage: "url(" + imgsrc + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Typography color="textPrimary" className={classes.title}>{`${title}`}</Typography>
    </NavLink>
  );
}

const styles = {};

export default Div;
