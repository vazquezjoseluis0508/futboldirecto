export interface Match {
  date: string;
  time: string;
  home: string;
  away: string;
}

export interface Standing {
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  points: number;
}
