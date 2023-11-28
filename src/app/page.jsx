import React from "react";
import AnimeList from "@/app/commons/components/AnimeList";
import SectionTitle from "@/app/commons/components/SectionTitle";
import { getAnimeResponse } from "@/app/commons/libraries/api_libs";
import AnimeSlider from "./commons/components/AnimeSlider";

const Page = async () => {
  const upcomingAnime = await getAnimeResponse("seasons/upcoming", "limit=10");
  const topAnime = await getAnimeResponse("top/anime", "limit=10");

  return (
    <div className="flex min-h-screen flex-col gap-10">
      <section className="flex flex-col gap-3">
        <SectionTitle linkHref="/populer">Upcoming Anime</SectionTitle>
        <AnimeSlider api={upcomingAnime} />
      </section>
      <section className="flex flex-col gap-3">
        <SectionTitle linkHref="/populer">Most Popular</SectionTitle>
        <AnimeList api={topAnime} />
      </section>
    </div>
  );
};

export default Page;
