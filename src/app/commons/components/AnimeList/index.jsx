import AnimeCard from "./AnimeCard";
import AnimeSkeleton from "./AnimeSkeleton";

const AnimeList = ({ api }) => {
  const arr = Array.from({ length: 15 }, (value, index) => index);
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 w-full">
      {api.data
        ? api.data.map((anime) => {
            return (
              <AnimeCard
                key={anime.mal_id}
                id={anime.mal_id}
                title={anime.title}
                episode={anime.episodes}
                studio={anime.studios[0] ? anime.studios[0].name : "unknown"}
                image={anime.images.webp.image_url}
              />
            );
          })
        : arr.map((val) => {
            return <AnimeSkeleton key={val} />;
          })}
    </div>
  );
};

export default AnimeList;
