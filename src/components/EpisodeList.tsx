import { IEpisode } from "../utils/types";
import Episode from "./Episode";

interface Prop {
  episodes: IEpisode[];
}

function EpisodeList({ episodes }: Prop): JSX.Element {
  return (
    <div className="componentList">
      {episodes.map((ep) => (
        <Episode episode={ep} key={ep.id} />
      ))}
    </div>
  );
}

export default EpisodeList;
