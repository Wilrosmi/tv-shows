import EpisodeList from "./components/EpisodeList";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import searchFilter from "./utils/searchFilter";
import { IEpisode } from "./utils/types";
import shows from "./shows.json"

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [episodes, setEpisodes] = useState<IEpisode[]>([])

  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await fetch(
        "https://api.tvmaze.com/shows/82/episodes"
      );
      const jsonBody: IEpisode[] = await response.json();
      setEpisodes(jsonBody)
    }
    fetchEpisodes();
  }, []);
  const filteredEpList = searchFilter(searchTerm, episodes);

  const showsDropdown = shows.map((show) => <option key={show.id}>{show.name}</option>)

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
