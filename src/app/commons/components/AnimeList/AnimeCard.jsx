import { Card, CardFooter, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

const AnimeCard = ({ id, title, image, episode, studio }) => {
  return (
    <Link href={`/anime/${id}`} className="cursor-pointer">
      <Card className="py-2" radius="sm">
        <CardBody>
          <Image
            isZoomed
            alt="Card background"
            className="h-40 w-72 object-cover"
            radius="sm"
            src={image}
          />
        </CardBody>
        <CardFooter className="mt-[-10px] flex-col items-start space-y-1">
          <p className="line-clamp-1 text-medium uppercase font-bold">
            {title}
          </p>

          {episode !== "" && (
            <small className="line-clamp-1 text-default-500">
              {episode ? episode : 0} Episode | {studio}
            </small>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default AnimeCard;
