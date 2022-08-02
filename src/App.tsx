import episodes from "./episodes.json";
import EpisodeList from "./components/EpisodeList";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import searchFilter from "./utils/searchFilter";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredEpList = searchFilter(searchTerm, episodes);

  return (
    <div>
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
