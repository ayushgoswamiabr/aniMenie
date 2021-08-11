import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/container";
import Top from "../components/custom/Top";
import Tabss from "../components/custom/Tabss";
import Paper from "@material-ui/core/Paper";

function Custom() {
  const classes = useStyles();
  // data from  navlink
  const location = useLocation();
  const id = location.state.id;
  // api fetching done
  const [item, setItem] = useState({});
  const [img, setImg] = useState({});
  const api = "https://api.jikan.moe/v3/anime/";
  const request = "/pictures";
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(api + `${id}`);
      setItem(data);
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(api + `${id}` + request);
      setImg(data.pictures);
    };
    getData();
  }, []);
  //Setting for tabs

  return (
    <div>
      <Container>
        <Top
          title={item.title_english}
          score={item.score}
          scored_by={item.scored_by}
          synopsis={item.synopsis}
          image={item.image_url}
          subtitle={item.title}
          rank={item.rank}
          popularity={item.popularity}
          members={item.members}
          type={item.type}
          source={item.source}
          episodes={item.episodes}
          duration={item.duration}
          studios={item.studios}
          genres={item.genres}
          status={item.status}
        />
        {/* will make this one later */}

        <Tabss id={id} />
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
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

export default Custom;
