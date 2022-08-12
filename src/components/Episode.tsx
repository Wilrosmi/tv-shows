import { IEpisode } from "../utils/types";
import nameSeasonNumbers from "../utils/nameSeasonNumbers";
import cleanSummary from "../utils/cleanSummary";

interface Prop {
  episode: IEpisode;
}

function Episode({ episode }: Prop): JSX.Element {
  const { name, season, number: epNumber, image, summary } = episode;
  const backupImage =
    "https://cdn1.vectorstock.com/i/thumb-large/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg";
  return (
    <div className="episode">
      <h3 className="episodeTitle">
        {name} - {nameSeasonNumbers(season, epNumber)}
      </h3>
      <img
        className="episodeImage"
        src={image && image.medium ? image.medium : backupImage}
        alt={`Still from ${name}`}
      />
      <p>{cleanSummary(summary)}</p>
    </div>
  );
}

export default Episode;
