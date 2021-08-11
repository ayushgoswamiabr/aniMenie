import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Div from "../components/Div.js";
import axios from "axios";
import DummyScreen from "../components/DummyScreen.js";
import {
  Typography,
  Container,
  Grid,
  CircularProgress,
} from "@material-ui/core/";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";

function Search() {
  const classes = useStyles();
  const location = useLocation();
  console.log(location.state);
  console.log(location.type);
  const valueDash = location.state.value;
  const value = valueDash.replace(/ /g, "%20");
  const type = location.state.type;

  const [isLoading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const [itemChar, setItemChar] = useState([]);
  const api = `https://api.jikan.moe/v3/search/anime?page=1&q=${value}`;
  const apiChar = `https://api.jikan.moe/v3/search/character?page=1&q=${value}`;

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(api);
      setItem(data.results);
      setLoading(false);
    };
    getData();
  }, [location.state.value]);
  // api for characters
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(apiChar);
      setItemChar(data.results);
      setLoading(false);
    };
    getData();
  }, [location.state.value]);

  //1st one for characters
  return type === "character" ? (
    <Container>
      {isLoading ? (
        <DummyScreen />
      ) : (
        <Grid container spacing={1} onLoad={() => setLoading(false)}>
          {itemChar.map((element, index) => (
            <Grid item sm={4} md={3} lg key={index}>
              <Div imgsrc={element.image_url} id={element.mal_id} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  ) : (
    //for animes
    <Container>
      {isLoading ? (
        <DummyScreen />
      ) : (
        <Grid container spacing={1} onLoad={() => setLoading(false)}>
          {item.map((element, index) => (
            <Grid item sm={4} md={3} lg key={index}>
              <Div imgsrc={element.image_url} id={element.mal_id} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  gridSpace: {
    padding: 4,
  },
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
export default Search;
