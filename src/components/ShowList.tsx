import { IShow } from "../utils/types";
import Show from "./Show";

interface Prop {
  shows: IShow[];
}

export default function ShowList({ shows }: Prop): JSX.Element {
  const sortedShows = shows.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
  return (
    <>
      {sortedShows.map((x) => (
        <Show show={x} key={x.id} />
      ))}
    </>
  );
}

/*
fetch in ShowList component




*/
