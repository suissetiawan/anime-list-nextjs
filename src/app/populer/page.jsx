"use client";

import AnimeList from "@/app/commons/components/AnimeList";
import SectionTitle from "@/app/commons/components/SectionTitle";
import Pagination from "@/app/commons/components/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/app/commons/libraries/api_libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    setTopAnime([]);
    const data = await getAnimeResponse("top/anime", `page=${page}&limit=15`);
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="flex min-h-screen flex-col">
      <section className="flex flex-col gap-3">
        <SectionTitle isShowButton={false}>Most Popular</SectionTitle>
        <div className="flex flex-col items-center gap-10">
          <AnimeList api={topAnime} />
          <Pagination
            page={page}
            lastPage={topAnime.pagination?.last_visible_page}
            setPage={setPage}
          />
        </div>
      </section>
    </div>
  );
};

export default Page;
