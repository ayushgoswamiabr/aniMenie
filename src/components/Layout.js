import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import "./styles.css";
import Header from "./Header";

const useStyles = makeStyles({
  header: {
    marginBottom: 30,
  },
  // type: {
  //   color: "#FFF",
  // },
});

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      {/* <div className={classes.header}>
        <Typography variant="h2" align="center" className={classes.type}>
          App Bar
        </Typography>
      </div> */}
      <div className={classes.header}>
        <Header />
      </div>
      <div>{children}</div>
      <div className={classes.header}>
        <Typography variant="h2" align="center" className={classes.type}>
          Foooter 💖
        </Typography>
      </div>
    </div>
  );
}

export default Layout;
