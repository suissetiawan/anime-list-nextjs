import { Image, Divider, Chip } from "@nextui-org/react";
import { Rating, RoundedStar } from "@smastrom/react-rating";

const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#9353d3",
  inactiveFillColor: "#c9a9e9",
};

const AnimeDetails = ({ anime }) => {
  return (
    <div className="flex gap-4">
      <div className="basis-1/4">
        <Image
          isZoomed
          className="w-full object-cover"
          alt="Card background"
          radius="sm"
          src={anime.data.images.webp.large_image_url}
        />
      </div>
      <div className="basis-3/4 px-6 space-y-3">
        <p className="text-3xl font-extrabold mb-2">{anime.data.title}</p>
        <div className="flex items-center gap-2">
          <p className="text-2xl p-2 bg-zinc-800 rounded-md">
            {anime.data.score}
          </p>
          <div className="space-y-1">
            <Rating
              style={{ maxWidth: 100 }}
              value={(anime.data.score * 5) / 10}
              readOnly
              itemStyles={myStyles}
            />
            <p className="text-tiny">{anime.data.scored_by} votes</p>
          </div>
        </div>
        <Divider />
        <p className="text-xl text-secondary-600 font-extrabold">Synopsis :</p>
        <p className="text-justify">{anime.data.synopsis}</p>
        <Divider />
        <div className="flex gap-2">
          {anime.data.genres.map((genre) => {
            return (
              <Chip key={genre.mal_id} radius="sm" size="lg">
                {genre.name}
              </Chip>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
