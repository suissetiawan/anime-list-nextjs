import FormattedDate from "@/app/commons/libraries/date_libs";

const AnimeDatas = (anime) => {
  return [
    {
      key: "Original Title",
      value: anime.data.title_japanese,
    },
    {
      key: "Status",
      value: anime.data.airing ? "Completed" : "Ongoing",
    },
    {
      key: "Realese Date",
      value: FormattedDate(anime.data.aired.from),
    },
    {
      key: "Episodes",
      value: anime.data.episodes ? anime.data.episodes + " Episodes" : " - ",
    },
    {
      key: "Studio",
      value: anime.data.studios[0].name,
    },
    {
      key: "Type",
      value: anime.data.type,
    },
  ];
};

export default AnimeDatas;
