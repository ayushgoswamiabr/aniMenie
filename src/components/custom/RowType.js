import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

function RowType({ name, value }) {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.rankBarItems} variant="subtitle2">
        {name}:
        <Typography variant="subtitle" color="textSecondary">
          {" "}
          {value}
        </Typography>
      </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  rankBarItems: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(2),
  },
}));

export default RowType;
