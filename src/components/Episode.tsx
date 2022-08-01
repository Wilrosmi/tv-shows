import { IEpisode } from "../utils/types";

interface Prop {
  episode: IEpisode;
}

function Episode({ episode }: Prop): JSX.Element {
  const { name, season, number, image, summary } = episode;
  return (
    <>
      <h3>
        {name} - S{season} E{number}
      </h3>
      <img src={image.medium} alt={`Still from ${name}`} />
      <p>{summary}</p>
    </>
  );
}

export default Episode;
