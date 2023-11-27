"use client";

import { getAnimeResponse } from "@/app/commons/services/api_libs";
import { useState, useEffect } from "react";
import AnimeDetails from "../components/AnimeDetails";
import AnimeTabs from "../components/AnimeTabs";
import "@smastrom/react-rating/style.css";

const Page = ({ params: { anime_id } }) => {
  const [anime, setAnime] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeResponse(`anime/${anime_id}`);
    setAnime(data);
    return true;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {anime.length !== 0 && (
        <div className=" flex flex-col gap-4 p-6">
          <AnimeDetails anime={anime} />
          <AnimeTabs anime={anime} />
        </div>
      )}
    </>
  );
};

export default Page;
