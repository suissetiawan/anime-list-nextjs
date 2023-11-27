import AnimeList from "@/app/commons/components/AnimeList";
import SectionTitle from "@/app/commons/components/General/SectionTitle";
import { getAnimeResponse } from "@/app/commons/services/api_libs";

const Page = async () => {
  const upcomingAnime = await getAnimeResponse("seasons/upcoming", "limit=5");
  const topAnime = await getAnimeResponse("top/anime", "limit=10");

  return (
    <div className="flex min-h-screen flex-col gap-10 p-6">
      <section className="flex flex-col gap-3">
        <SectionTitle linkHref="/populer">Upcoming Anime</SectionTitle>
        <AnimeList api={upcomingAnime} />
      </section>
      <section className="flex flex-col gap-3">
        <SectionTitle linkHref="/populer">Most Popular</SectionTitle>
        <AnimeList api={topAnime} />
      </section>
    </div>
  );
};

export default Page;
