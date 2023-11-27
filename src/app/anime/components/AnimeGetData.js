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
      value: new Date(anime.data.aired.from).toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
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
