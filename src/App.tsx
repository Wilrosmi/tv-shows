import episodes from "./episodes.json"
import EpisodeList from "./components/EpisodeList";

function App(): JSX.Element {
  return <EpisodeList episodes={episodes} />;
}

export default App;
