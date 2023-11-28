import { Card, CardBody } from "@nextui-org/react";
import SectionTitle from "@/app/commons/components/SectionTitle";
import YouTube from "react-youtube";

const AnimeTrailer = ({ videoId }) => {
  const screen = window.screen.width;
  const opts = {
    height: screen > 768 ? "520" : "200",
    width: "100%",
  };
  return (
    <Card>
      <CardBody className="p-4 md:p-10 gap-4">
        <SectionTitle isShowButton={false}>Trailer</SectionTitle>
        <YouTube videoId={videoId} opts={opts} />
      </CardBody>
    </Card>
  );
};

export default AnimeTrailer;
