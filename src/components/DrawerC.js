import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  SwipeableDrawer,
  makeStyles,
  Divider,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Custom from "../screen/Custom";
import Genre from "../screen/Genre";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    [theme.breakpoints.down("sm")]: {
      width: 200,
    },
    [theme.breakpoints.down("md")]: {
      width: 200,
    },
  },
}));

function DrawerC() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // api calling for the different links inside this drawer
  const [update, setUpdate] = useState("");

  return (
    <div>
      <IconButton
        edge="start"
        // className={classes.menuButton}
        color="inherit"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* swipeableDrawer */}
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
        <div className={classes.list}>
          <NavLink to="/" onClick={() => setOpen(false)}>
            <Box textAlign="center" p={2}>
              <Typography variant="h5">Ani-Menie</Typography>
            </Box>
          </NavLink>
          <Divider />
          <Box textAlign="left" p={2}>
            <h2>Container</h2>
          </Box>

          <Divider />
          <List>
            {[
              "Action",
              "Adventure",
              "Cars",
              "Comedy",
              "Dementia",
              "Demons",
            ].map((element, index) => (
              <ListItem
                button
                key={element}
                onClick={() => {
                  setOpen(false);
                  setUpdate(element);
                }}
                component={NavLink}
                to={{
                  pathname: "/genre",
                  state: {
                    genreID: index + 1,
                    name: { element },
                    update: { update },
                  },
                }}
                ContainerComponent={Genre}
              >
                <ListItemText primary={element} />
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default DrawerC;
