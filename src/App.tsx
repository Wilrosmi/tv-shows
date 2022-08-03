import EpisodeList from "./components/EpisodeList";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import searchFilter from "./utils/searchFilter";
import { IEpisode } from "./utils/types";
import shows from "./shows.json";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [showsEpisodes, setShowsEpisodes] = useState<IEpisode[]>([]);

  /*  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await fetch(
        "https://api.tvmaze.com/shows/82/episodes"
      );
      const jsonBody: IEpisode[] = await response.json();
      setEpisodes(jsonBody)
    }
    fetchEpisodes();
  }, []); */
  const filteredEpList = searchFilter(searchTerm, showsEpisodes);

  const handleDropdownClick = (name: string): void => {
    // Find id from json with show name
    // Fetch episodes for that show from api using id
    // setShowsEpisodes with api response
    let id = NaN;
    for (const show of shows) {
      if (show.name === name) {
        id = show.id;
        fetchShowsEpisodes(id);
      }
    }
    if (isNaN(id)) {
      window.alert("It doesn't work"); //Change this
    }
  };

  const fetchShowsEpisodes = async (id: number): Promise<void> => {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
    const jsonBody: IEpisode[] = await response.json();
    setShowsEpisodes(jsonBody);
  };

  const showsDropdown = shows.map((show) => (
    <option key={show.id} onClick={() => handleDropdownClick(show.name)}>
      {show.name}
    </option>
  ));

  return (
    <div>
      <select>{showsDropdown}</select> <br />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <p>There are {filteredEpList.length} matches.</p>
      <EpisodeList episodes={filteredEpList} />
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
