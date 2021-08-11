import React from "react";
import Container from "@material-ui/core/Container";
import TopAnime from "../components/TopAnime";

//material ui imports
import Typography from "@material-ui/core/Typography";

function Home() {
  return (
    <Container>
      <Typography variant="h6" color="textPrimary" align="left" gutterBottom>
        TOP AIRING
      </Typography>
      <TopAnime top="top/anime/1/airing" arrayName="top" />

      <Typography
        variant="h6"
        color="textPrimary"
        weight=""
        align="left"
        gutterBottom
      >
        UPCOMING SEASONS
      </Typography>
      <TopAnime top="top/anime/1/upcoming" arrayName="top" />

      <Typography
        variant="h6"
        color="textPrimary"
        weight=""
        align="left"
        gutterBottom
      >
        HIGHEST RATED
      </Typography>
      <TopAnime top="search/anime?order_by=score" arrayName="results" />
      <Typography
        variant="h6"
        color="textPrimary"
        weight=""
        align="left"
        gutterBottom
      >
        ALL TIME POPULAR
      </Typography>
      <TopAnime top="search/anime?order_by=members" arrayName="results" />
      <Typography
        variant="h6"
        color="textPrimary"
        weight=""
        align="left"
        gutterBottom
      >
        Top movies
      </Typography>
      <TopAnime top="top/anime/1/movie" arrayName="top" />
    </Container>
  );
}

export default Home;
