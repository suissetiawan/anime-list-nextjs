"use client";

import AnimeList from "../AnimeList";
import SectionTitle from "../SectionTitle";
import PaginationControl from "../Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libraries/api_libs";

const Page = ({ title, endPointApi, query }) => {
  const [page, setPage] = useState(1);
  const [anime, setAnime] = useState([]);
  const queryApi = query
    ? `${query}&page=${page}&limit=15`
    : `page=${page}&limit=15`;

  const fetchData = async () => {
    setAnime([]);
    const data = await getAnimeResponse(endPointApi, queryApi);
    setAnime(data);
  };

  useEffect(() => {
    fetchData();
    console.log(queryApi);
  }, [page]);
  return (
    <div className="flex min-h-screen flex-col">
      <section className="flex flex-col gap-3">
        <SectionTitle isShowButton={false}>{title}</SectionTitle>
        <div className="flex flex-col items-center gap-10">
          <AnimeList api={anime} />
          {anime.pagination?.last_visible_page > 1 && (
            <PaginationControl
              page={page}
              lastPage={anime.pagination?.last_visible_page}
              setPage={setPage}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default Page;
