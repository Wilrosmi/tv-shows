export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export interface IShow {
  id: number;
  name: string;
  genres: string[];
  rating: {
    average: number;
  };
  runtime: number;
  status: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}
