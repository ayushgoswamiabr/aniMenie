import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

function ImgList({ img1, name1, role1, img2, name2, role2 }) {
  return (
    <div style={styles.parent}>
      <div style={styles.root}>
        <div style={styles.img}>
          <img style={styles.image} src={img1} alt="character" />
        </div>
        <div style={styles.child1}>
          <Typography variant="caption">{name1}</Typography>
          <Typography variant="caption">{role1}</Typography>
        </div>
      </div>
      <div style={styles.root}>
        <div style={styles.img}>
          <img style={styles.image} src={img2} alt="character" />
        </div>
        <div style={styles.child1}>
          <Typography variant="caption">{name2}</Typography>
          <Typography variant="caption">{role2}</Typography>
        </div>
      </div>
    </div>
  );
}

const styles = {
  parent: {
    display: "flex",
    justifyContent: "spaceBetween",
  },
  root: {
    display: "flex",
    justifyContent: "spaceBetween",
  },
  img: {
    height: "10",
    width: "10",
  },
  image: {
    height: "1",
    width: "1",
  },
  child: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceBetween",
  },
};

export default ImgList;
