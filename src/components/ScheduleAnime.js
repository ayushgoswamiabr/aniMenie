import React, { useEffect, useState } from "react";
import axios from "axios";
import CarouselCustom from "./CarouselCustom";
import Div from "./Div";

function ScheduleAnime() {
  const [item, setItem] = useState([]);
  const api = "https://api.jikan.moe/v3/schedule";
  const top = "monday";

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(api + `${top}`);
      console.log(data.top);
      setItem(data.top);
    };
    getData();
  }, []);
  return (
    <CarouselCustom
      children={item.map((element) => (
        <Div imgsrc={element.image_url} />
      ))}
    />
  );
}

export default ScheduleAnime;
