import { IEpisode } from "../utils/types";
import Episode from "./Episode";

interface Prop {
  episodes: IEpisode[];
}

function EpisodeList({ episodes }: Prop): JSX.Element {
  return (
    <>
      {episodes.map((ep) => (
        <Episode episode={ep} key={ep.id} />
      ))}
    </>
  );
}

export default EpisodeList;
