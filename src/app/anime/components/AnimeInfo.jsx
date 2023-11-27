import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import AnimeDatas from "./AnimeGetData";

const AnimeInfo = ({ anime }) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-4">
      <Table isStriped hideHeader={true}>
        <TableHeader>
          <TableColumn></TableColumn>
          <TableColumn></TableColumn>
        </TableHeader>
        <TableBody>
          {AnimeDatas(anime).map((data) => {
            return (
              <TableRow key={data.key}>
                <TableCell>{data.key}</TableCell>
                <TableCell>{data.value}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default AnimeInfo;
