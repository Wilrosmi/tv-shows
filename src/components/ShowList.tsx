import { IShow } from "../utils/types";
import Show from "./Show";

interface Prop {
  shows: IShow[];
}

export default function ShowList({ shows }: Prop): JSX.Element {
  return (
    <>
      {shows.map((x) => (
        <Show show={x} key={x.id} />
      ))}
    </>
  );
}

/*
fetch in ShowList component




*/
