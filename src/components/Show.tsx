import { IShow, IEpisode } from "../utils/types";
import cleanSummary from "../utils/cleanSummary";
import { fetchShowsEpisodes } from "../App";

interface Prop {
  show: IShow;
  shows: IShow[];
  setShowsEpisodes: React.Dispatch<React.SetStateAction<IEpisode[]>>;
  setDropdownValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Show({
  show,
  shows,
  setShowsEpisodes,
  setDropdownValue,
}: Prop): JSX.Element {
  const { name, image, rating, runtime, genres, status, summary } = show;
  const backupImage =
    "https://cdn1.vectorstock.com/i/thumb-large/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg";
  return (
    <div
      className="show"
      onClick={() =>
        handleShowTitleClick(name, shows, setShowsEpisodes, setDropdownValue)
      }
    >
      <h3 className="showTitle">{name}</h3>
      <div className="showDetailsTop">
        <img
          className="showImage"
          src={image && image.medium ? image.medium : backupImage}
          alt="Still from show"
        />
        <div className="showDetails">
          <p>Rating: {rating.average}</p>
          <p>
            Runtime: {runtime} minute{runtime > 1 ? "s" : ""}
          </p>
          <p>Genres:</p>
          <ul>
            {genres.map((a, index) => (
              <li key={index}>{a}</li>
            ))}
          </ul>
          <p>Status: {status}</p>
        </div>
      </div>
      <p className="summary">{cleanSummary(summary)}</p>
    </div>
  );
}

function handleShowTitleClick(
  name: string,
  shows: IShow[],
  setShowsEpisodes: React.Dispatch<React.SetStateAction<IEpisode[]>>,
  setDropdownValue: React.Dispatch<React.SetStateAction<string>>
): void {
  for (const show of shows) {
    if (show.name === name) {
      fetchShowsEpisodes({
        id: show.id,
        name,
        setShowsEpisodes,
        setDropdownValue,
      });
    }
  }
}
