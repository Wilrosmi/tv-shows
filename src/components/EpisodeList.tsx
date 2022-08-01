import { IEpisode } from "../utils/types";

interface Prop {
    episodes: IEpisode[];
}

function EpisodeList({episodes}: Prop): JSX.Element {
    return <p>{episodes[0].name}</p>
}


export default EpisodeList;