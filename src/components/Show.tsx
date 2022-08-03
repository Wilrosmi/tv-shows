import { IShow } from "../utils/types";

interface Prop {
  show: IShow;
}

export default function Show({ show }: Prop): JSX.Element {
  const { name, image, rating, runtime, genres, status, summary } = show;
  const backupImage =
    "https://cdn1.vectorstock.com/i/thumb-large/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg";
  return (
    <>
      <h3>{name}</h3>
      <img
        src={image && image.medium ? image.medium : backupImage}
        alt="Still from show"
      />
      <p>Rating: {rating.average}</p>
      <p>Runtime: {runtime}</p>
      <p>Genres:</p>
      <ul>
        {genres.map((a, index) => (
          <li key={index}>{a}</li>
        ))}
      </ul>
      <p>Status: {status}</p>
      <p>{summary}</p>
    </>
  );
}
