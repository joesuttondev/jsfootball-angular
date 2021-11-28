import { Team } from "./team";

export interface Fixture {
  id: number;
  datetime: Date;
  status: string;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
}

export interface Score {
  winner: string;
  duration: string;
  fullTime: Period;
  halfTime: Period;
  extraTime: Period;
}

export interface Period {
  homeTeam: number;
  awayTeam: number;
}
