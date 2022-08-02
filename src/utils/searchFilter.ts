import { IEpisode } from "./types";

export default function searchFilter(
  searchTerm: string,
  inputEpisodes: IEpisode[]
): IEpisode[] {
  const outputEpisodes = inputEpisodes.filter((ep) =>
    findEpisodes(ep, searchTerm)
  );
  return outputEpisodes;
}

function findEpisodes(ep: IEpisode, searchTerm: string): boolean {
  const epNameLowerCase = ep.name.toLowerCase();
  const summaryLowerCase = ep.summary.toLowerCase();
  const searchTermLowerCase = searchTerm.toLowerCase();
  return (
    epNameLowerCase.includes(searchTermLowerCase) ||
    summaryLowerCase.includes(searchTermLowerCase)
  );
}
