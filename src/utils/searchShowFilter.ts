import { IShow } from "./types";

export default function searchShowFilter(
  searchTerm: string,
  inputShows: IShow[]
): IShow[] {
  const outputShows = inputShows.filter((show) =>
    findShows(show, searchTerm)
  );
  return outputShows;
}

function findShows(show: IShow, searchTerm: string): boolean {
  const showNameLowerCase = show.name ? show.name.toLowerCase() : "";
  const summaryLowerCase = show.summary ? show.summary.toLowerCase() : "";
  const searchTermLowerCase = searchTerm.toLowerCase();
  return (
    showNameLowerCase.includes(searchTermLowerCase) ||
    summaryLowerCase.includes(searchTermLowerCase)
  );
}
