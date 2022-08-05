import EpisodeList from "./components/EpisodeList";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import searchEpFilter from "./utils/searchEpFilter";
import { IEpisode, IShow } from "./utils/types";
import ShowList from "./components/ShowList";
import searchShowFilter from "./utils/searchShowFilter";
import sortShows from "./utils/sortShows";

interface fetchShowsEpisodesProps {
  id: number;
  name: string;
  setShowsEpisodes: React.Dispatch<React.SetStateAction<IEpisode[]>>;
  setDropdownValue: React.Dispatch<React.SetStateAction<string>>;
}

export async function fetchShowsEpisodes({
  id,
  name,
  setShowsEpisodes,
  setDropdownValue,
}: fetchShowsEpisodesProps): Promise<void> {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
  const jsonBody: IEpisode[] = await response.json();
  setShowsEpisodes(jsonBody);
  setDropdownValue(name);
}

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [showsEpisodes, setShowsEpisodes] = useState<IEpisode[]>([]);
  const [dropdownValue, setDropdownValue] = useState("");
  const [shows, setShows] = useState<IShow[]>([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch("https://api.tvmaze.com/shows?page=0");
      const jsonBody: IShow[] = await response.json();
      setShows(jsonBody);
    };
    fetchShows();
  }, []);
  const filteredEpList = searchEpFilter(searchTerm, showsEpisodes);
  const filteredShowList = searchShowFilter(searchTerm, shows);

  const handleDropdownClick = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    // Find id from json with show name
    // Fetch episodes for that show from api using id
    // setShowsEpisodes with api response
    setSearchTerm("");
    const dropdownOptionId = e.target.selectedIndex;
    const name = e.target[dropdownOptionId].innerText;
    let targetShowId = NaN;
    if (dropdownOptionId === 0) {
      setShowsEpisodes([]);
      setDropdownValue(name);
      return;
    }

    for (const show of shows) {
      if (show.name === name) {
        targetShowId = show.id;
        fetchShowsEpisodes({
          id: targetShowId,
          name,
          setShowsEpisodes,
          setDropdownValue,
        });
      }
    }
    if (isNaN(targetShowId)) {
      window.alert("It doesn't work"); //Change this
    }
  };

  const showsDropdown = sortShows(shows).map((show) => (
    <option key={show.id}>{show.name}</option>
  ));

  const onShowPage = showsEpisodes.length === 0;
  return (
    <div>
      <select onChange={(e) => handleDropdownClick(e)} value={dropdownValue}>
        <option>Homepage</option>
        {showsDropdown}
      </select>
      <br />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <p>
        There are {onShowPage ? filteredShowList.length : filteredEpList.length}{" "}
        matches.
      </p>
      {onShowPage ? (
        <ShowList
          shows={filteredShowList}
          setShowsEpisodes={setShowsEpisodes}
          setDropdownValue={setDropdownValue}
        />
      ) : (
        <EpisodeList episodes={filteredEpList} />
      )}
      <p>
        Credit to{" "}
        <a
          rel="noreferrer"
          href="https://www.tvmaze.com/shows/82/game-of-thrones"
          target="_blank"
        >
          TVMaze
        </a>
      </p>
    </div>
  );
}

export default App;
