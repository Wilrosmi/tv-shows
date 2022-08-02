import episodes from "./episodes.json";
import EpisodeList from "./components/EpisodeList";

function App(): JSX.Element {
  return (
    <div>
      <EpisodeList episodes={episodes} />
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
