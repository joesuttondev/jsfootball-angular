import { Team } from "./team";

export interface LeaguePosition
{
  position: number;
  team: Team;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  for: number;
  against: number;
  goalDifference: number;
  points: number;
}
