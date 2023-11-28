import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import AnimeTrailer from "./AnimeTrailer";
import AnimeInfo from "./AnimeInfo";
import AnimeEpisodes from "./AnimeEpisodes";

const AnimeTabs = ({ anime, episodes }) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <Tabs size="lg" color="secondary" fullWidth={true} radius="sm">
        <Tab key="trailer" title="Trailer">
          <AnimeTrailer videoId={anime.data.trailer.youtube_id} />
        </Tab>
        <Tab key="episodes" title="Episodes">
          <AnimeEpisodes episodes={episodes} />
        </Tab>
        <Tab key="info" title="Details">
          <AnimeInfo anime={anime} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default AnimeTabs;
