import { Bet } from './types';

// Mock API service - In production, this would connect to a real EV betting API
// For demonstration, we'll generate mock data with bets within the next 72 hours
export const fetchEVBets = async (): Promise<Bet[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const now = new Date();
  const in72Hours = new Date(now.getTime() + 72 * 60 * 60 * 1000);

  // Generate mock bets with positive EV within 72 hours
  const mockBets: Bet[] = [
    {
      id: '1',
      sport: 'Basketball',
      league: 'NBA',
      homeTeam: 'Los Angeles Lakers',
      awayTeam: 'Boston Celtics',
      betType: 'Moneyline',
      odds: 2.15,
      expectedValue: 8.5,
      eventDate: new Date(now.getTime() + 5 * 60 * 60 * 1000).toISOString(),
      bookmaker: 'BetMGM',
      probability: 52.3,
    },
    {
      id: '2',
      sport: 'Basketball',
      league: 'NBA',
      homeTeam: 'Golden State Warriors',
      awayTeam: 'Phoenix Suns',
      betType: 'Spread',
      odds: 1.91,
      expectedValue: 5.2,
      eventDate: new Date(now.getTime() + 12 * 60 * 60 * 1000).toISOString(),
      bookmaker: 'DraftKings',
      line: '-4.5',
      probability: 55.8,
    },
    {
      id: '3',
      sport: 'Football',
      league: 'NFL',
      homeTeam: 'Kansas City Chiefs',
      awayTeam: 'Buffalo Bills',
      betType: 'Over/Under',
      odds: 1.95,
      expectedValue: 6.8,
      eventDate: new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString(),
      bookmaker: 'FanDuel',
      line: 'Over 47.5',
      probability: 54.1,
    },
    {
      id: '4',
      sport: 'Basketball',
      league: 'NBA',
      homeTeam: 'Miami Heat',
      awayTeam: 'Milwaukee Bucks',
      betType: 'Moneyline',
      odds: 2.75,
      expectedValue: 12.3,
      eventDate: new Date(now.getTime() + 36 * 60 * 60 * 1000).toISOString(),
      bookmaker: 'Caesars',
      probability: 45.2,
    },
    {
      id: '5',
      sport: 'Hockey',
      league: 'NHL',
      homeTeam: 'Toronto Maple Leafs',
      awayTeam: 'Montreal Canadiens',
      betType: 'Moneyline',
      odds: 1.85,
      expectedValue: 4.7,
      eventDate: new Date(now.getTime() + 48 * 60 * 60 * 1000).toISOString(),
      bookmaker: 'BetMGM',
      probability: 58.9,
    },
    {
      id: '6',
      sport: 'Football',
      league: 'NFL',
      homeTeam: 'Dallas Cowboys',
      awayTeam: 'Philadelphia Eagles',
      betType: 'Spread',
      odds: 2.05,
      expectedValue: 7.1,
      eventDate: new Date(now.getTime() + 60 * 60 * 60 * 1000).toISOString(),
      bookmaker: 'DraftKings',
      line: '+3.5',
      probability: 51.7,
    },
    {
      id: '7',
      sport: 'Basketball',
      league: 'NBA',
      homeTeam: 'Denver Nuggets',
      awayTeam: 'LA Clippers',
      betType: 'Over/Under',
      odds: 1.90,
      expectedValue: 5.9,
      eventDate: new Date(now.getTime() + 70 * 60 * 60 * 1000).toISOString(),
      bookmaker: 'FanDuel',
      line: 'Over 225.5',
      probability: 56.3,
    },
  ];

  // Filter bets within 72 hours
  const filteredBets = mockBets.filter(bet => {
    const betDate = new Date(bet.eventDate);
    return betDate >= now && betDate <= in72Hours;
  });

  // Sort by EV descending
  return filteredBets.sort((a, b) => b.expectedValue - a.expectedValue);
};

export const isWithin72Hours = (eventDate: string): boolean => {
  const now = new Date();
  const eventTime = new Date(eventDate);
  const diffHours = (eventTime.getTime() - now.getTime()) / (1000 * 60 * 60);
  return diffHours >= 0 && diffHours <= 72;
};
