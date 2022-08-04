import { IShow } from "./types";

export default function sortShows(shows : IShow[]): IShow[] {
    const sortedShows = shows.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });
    return sortedShows
} 