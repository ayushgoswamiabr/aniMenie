import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Div from "../components/Div.js";
import axios from "axios";
import {
  makeStyles,
  Typography,
  Container,
  Grid,
  CircularProgress,
} from "@material-ui/core/";
import DummyScreen from "../components/DummyScreen.js";

function Genre() {
  const classes = useStyles();
  const location = useLocation();
  const genreID = location.state.genreID;
  const name = location.state.name;
  const [isLoading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const api = `https://api.jikan.moe/v3/search/anime?genre=${genreID}&page=1`;
  console.log(api);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(api);
      setItem(data.results);
      setLoading(false);
      console.log(name);
    };
    getData();
  }, [location.state.update]);
  return (
    <Container>
      {isLoading ? (
        <DummyScreen />
      ) : (
        <Grid container spacing={1}>
          {item.map((element) => (
            <Grid item sm={4} md={3} lg key={element.mal_id}>
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
}));
export default Genre;
