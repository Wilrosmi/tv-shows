import { IShow } from "../utils/types";
import Show from "./Show";
import sortShows from "../utils/sortShows"

interface Prop {
  shows: IShow[];
  setShowsEpisodes : any
}

export default function ShowList({ shows , setShowsEpisodes}: Prop): JSX.Element {
  const sortedShows = sortShows(shows)
  return (
    <>
      {sortedShows.map((x) => (
        <Show show={x} key={x.id} shows={shows} setShowsEpisodes={setShowsEpisodes} />
      ))}
    </>
  );
}

