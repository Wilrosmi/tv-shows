import { IEpisode } from "../utils/types";
import nameSeasonNumbers from "../utils/nameSeasonNumbers";

interface Prop {
  episode: IEpisode;
}

function Episode({ episode }: Prop): JSX.Element {
  const { name, season, number: epNumber, image, summary } = episode;
  return (
    <>
      <h3>
        {name} - {nameSeasonNumbers(season, epNumber)}
      </h3>
      <img src={image.medium} alt={`Still from ${name}`} />
      <p>{summary}</p>
    </>
  );
}

export default Episode;
