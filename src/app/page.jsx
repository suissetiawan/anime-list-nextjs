import AnimeList from "@/components/AnimeList";
import SectionTitle from "@/components/General/SectionTitle";

const Page = async () => {
  const responses = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const topAnime = await responses.json();

  return (
    <div className="flex min-h-screen flex-col gap-10 p-6">
      <section className="flex flex-col gap-3">
        <SectionTitle linkHref="/populer">Most Popular</SectionTitle>
        <AnimeList api={topAnime} />
      </section>
      <section className="flex flex-col gap-3">
        <SectionTitle>Latest Anime</SectionTitle>
        <AnimeList api={topAnime} />
      </section>
    </div>
  );
};

export default Page;
