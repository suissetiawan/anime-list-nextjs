import SectionTitle from "@/app/commons/components/SectionTitle";
import FormattedDate from "@/app/commons/libraries/date_libs";
import {
  Listbox,
  ListboxItem,
  Card,
  CardBody,
  Avatar,
} from "@nextui-org/react";

const AnimeEpisodes = ({ episodes }) => {
  return (
    <Card>
      <CardBody className="gap-4">
        <SectionTitle isShowButton={false}>Episodes</SectionTitle>
        <Listbox
          classNames={{
            list: "max-h-[300px] overflow-scroll",
          }}
          items={episodes.data}
          label="Assigned to"
          variant="flat">
          {(item) => (
            <ListboxItem key={item.mal_id} textValue={item.title}>
              <div className="flex gap-2 items-center">
                <p className="text-medium px-4 py-2 rounded-md bg-secondary-600">
                  E-{item.mal_id}
                </p>
                <div className="flex flex-col">
                  <span className="text-medium">{item.title}</span>
                  <span className="text-tiny text-default-400">
                    {FormattedDate(item.aired)}
                  </span>
                </div>
              </div>
            </ListboxItem>
          )}
        </Listbox>
      </CardBody>
    </Card>
  );
};

export default AnimeEpisodes;
