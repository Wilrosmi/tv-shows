import { IEpisode } from "./types";

export default function searchEpFilter(
  searchTerm: string,
  inputEpisodes: IEpisode[]
): IEpisode[] {
  const outputEpisodes = inputEpisodes.filter((ep) =>
    findEpisodes(ep, searchTerm)
  );
  return outputEpisodes;
}

function findEpisodes(ep: IEpisode, searchTerm: string): boolean {
  const epNameLowerCase = ep.name ? ep.name.toLowerCase() : "";
  const summaryLowerCase = ep.summary ? ep.summary.toLowerCase() : "";
  const searchTermLowerCase = searchTerm.toLowerCase();
  return (
    epNameLowerCase.includes(searchTermLowerCase) ||
    summaryLowerCase.includes(searchTermLowerCase)
  );
}
