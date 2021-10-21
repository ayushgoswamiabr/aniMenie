import React, { useEffect, useState } from "react";
import axios from "axios";
import CarouselCustom from "./CarouselCustom";
import Div from "./Div";

// Slides displayer in homepage
function TopAnime({ top, arrayName }) {
  const [item, setItem] = useState([]);
  const api = "https://api.jikan.moe/v3/";

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(api + `${top}`, {
        params: {
          _limit: 13,
        },
      });
      arrayName === "top" ? setItem(data.top) : setItem(data.results);
    };
    getData();
  }, []);
  console.log(item)
  return (
    <CarouselCustom
      children={item
        .filter((item, idx) => idx < 13)
        .map((element) => (
          <Div imgsrc={element.image_url} id={element.mal_id} title={element.title}/>
        ))}
    />
  );
}

export default TopAnime;
