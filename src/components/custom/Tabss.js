//This container contains the example of using spinner before api loading

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import CircularProgress from "@material-ui/core/CircularProgress";

import axios from "axios";
import Div from "../Div.js";
import {
  Videos,
  Pictures,
  Episodes,
  Characters,
  Staff,
  Reviews,
  Recommendations,
} from "./CustomTabs";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

/////////////////////// exporting the contents/////////////////////////
export default function Tabss({ id }) {
  // state variables
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [item, setItem] = useState({});
  const [apiRequest, setApiRequest] = useState("videos");
  const [staff, setStaff] = useState({});
  const [isLoading, setLoading] = useState(true);

  //local variables
  const tabLables = [
    "videos",
    "pictures",
    "episodes",
    "characters_staff",
    "characters_staff",
    "reviews",
    "recommendations",
  ];
  const api = `https://api.jikan.moe/v3/anime/${id}/${apiRequest}`;
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(api);
      if (apiRequest === "characters_staff") {
        setStaff(data);
        setLoading(false);
      } else if (apiRequest === "videos") {
        setItem(data.promo);
        setLoading(false);
      } else {
        setItem(data[apiRequest]);
        setLoading(false);
      }
      console.log("I'm called second");
    };
    console.log("Use effect is called with id = " + id);
    getData();
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setApiRequest(tabLables[newValue]);
    setLoading(true);
  };
  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        centered
      >
        <Tab label="Videos" {...a11yProps(0)} />
        <Tab label="Pictures" {...a11yProps(1)} />
        <Tab label="Episodes" {...a11yProps(2)} />
        <Tab label="Character" {...a11yProps(3)} />
        <Tab label="Staff" {...a11yProps(4)} />

        <Tab label="Reviews" {...a11yProps(5)} />
        <Tab label="Recommendations" {...a11yProps(6)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        {isLoading ? <CircularProgress /> : <Videos items={item} />}{" "}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {isLoading ? <CircularProgress /> : <Pictures items={item} />}{" "}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {isLoading ? <CircularProgress /> : <Episodes items={item} />}{" "}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Characters items={staff.characters} />
        )}{" "}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {isLoading ? <CircularProgress /> : <Staff items={staff.staff} />}{" "}
      </TabPanel>
      <TabPanel value={value} index={5}>
        {isLoading ? <CircularProgress /> : <Reviews items={item} />}{" "}
      </TabPanel>
      <TabPanel value={value} index={6}>
        {isLoading ? <CircularProgress /> : <Recommendations items={item} />}{" "}
      </TabPanel>
    </div>
  );
}
