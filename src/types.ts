export interface Bet {
  id: string;
  sport: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  betType: string;
  odds: number;
  expectedValue: number;
  eventDate: string;
  bookmaker: string;
  line?: string;
  probability: number;
}

export interface BetAPIResponse {
  bets: Bet[];
  lastUpdated: string;
}
