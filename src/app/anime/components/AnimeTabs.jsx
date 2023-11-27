import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import AnimeTrailer from "./AnimeTrailer";
import AnimeInfo from "./AnimeInfo";

const AnimeTabs = ({ anime }) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <Tabs size="lg" color="secondary" fullWidth={true} radius="sm">
        <Tab key="trailer" title="Trailer">
          <AnimeTrailer videoId={anime.data.trailer.youtube_id} />
        </Tab>
        <Tab key="episodes" title="Episodes">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="info" title="Information">
          <AnimeInfo anime={anime} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default AnimeTabs;
