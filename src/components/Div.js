import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";

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

function Div({ imgsrc, id }) {
  const classes = useStyles();
  return (
    <NavLink to={{ pathname: "/custom", state: { id: id } }}>
      <div
        className={classes.divRoot}
        style={{
          backgroundImage: "url(" + imgsrc + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    </NavLink>
  );
}

const styles = {};

export default Div;
