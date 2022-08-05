import { IShow, IEpisode } from "../utils/types";
import Show from "./Show";
import sortShows from "../utils/sortShows"

interface ShowListProp {
  shows: IShow[];
  setShowsEpisodes : React.Dispatch<React.SetStateAction<IEpisode[]>>
  setDropdownValue : React.Dispatch<React.SetStateAction<string>>
}

export default function ShowList({ shows , setShowsEpisodes, setDropdownValue}: ShowListProp): JSX.Element {
  const sortedShows = sortShows(shows)
  return (
    <>
      {sortedShows.map((x) => (
        <Show show={x} key={x.id} shows={shows} setShowsEpisodes={setShowsEpisodes} setDropdownValue={setDropdownValue}/>
      ))}
    </>
  );
}

