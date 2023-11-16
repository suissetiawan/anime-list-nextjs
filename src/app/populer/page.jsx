"use client";

import AnimeList from "@/components/AnimeList";
import SectionTitle from "@/components/General/SectionTitle";
import Pagination from "@/components/General/Pagination";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    setTopAnime([]);
    const responses = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}&limit=15`
    );
    const data = await responses.json();
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="flex min-h-screen flex-col p-6">
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
