import AnimeViewAll from "@/app/commons/components/AnimeViewAll";

const Page = async ({ params: { keyword } }) => {
  const resultKeyword = decodeURI(keyword);
  return (
    <AnimeViewAll
      title={`Search for : ${resultKeyword}`}
      endPointApi="anime"
      query={`q=${resultKeyword}`}
    />
  );
};

export default Page;
