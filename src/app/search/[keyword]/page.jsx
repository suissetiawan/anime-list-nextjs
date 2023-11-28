import AnimeList from "@/app/commons/components/AnimeList";
import SectionTitle from "@/app/commons/components/SectionTitle";
import { getAnimeResponse } from "@/app/commons/libraries/api_libs";

const Page = async ({ params: { keyword } }) => {
  const resultKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${resultKeyword}`);
  return (
    <div className="flex min-h-screen flex-col">
      <section className="flex flex-col gap-3">
        <SectionTitle isShowButton={false}>
          Search for : "{resultKeyword}"
        </SectionTitle>
        <AnimeList api={searchAnime} />
      </section>
    </div>
  );
};

export default Page;
