import AnimeList from "@/components/AnimeList";
import SectionTitle from "@/components/General/SectionTitle";

const Page = async (value) => {
  const { keyword } = value.params;
  const resultKeyword = decodeURI(keyword);
  const responses = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${resultKeyword}`
  );
  const searchAnime = await responses.json();
  return (
    <div className="flex min-h-screen flex-col p-6">
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
