"use client";

import { getAnimeResponse } from "@/libraries/api_libs";
import { useState, useEffect } from "react";
import AnimeDetails from "../components/AnimeDetails";
import AnimeTabs from "../components/AnimeTabs";
import "@smastrom/react-rating/style.css";

const Page = ({ params: { anime_id } }) => {
  const [anime, setAnime] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  const fetchData = async () => {
    const dataAnime = await getAnimeResponse(`anime/${anime_id}`);
    const dataEpisodes = await getAnimeResponse(`anime/${anime_id}/episodes`);

    setAnime(dataAnime);
    setEpisodes(dataEpisodes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {anime.length !== 0 && (
        <div className=" flex flex-col gap-4">
          <AnimeDetails anime={anime} />
          <AnimeTabs anime={anime} episodes={episodes} />
        </div>
      )}
    </>
  );
};

export default Page;
