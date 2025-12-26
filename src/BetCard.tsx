import React from 'react';
import { Bet } from './types';
import { formatTimeRemaining, formatOdds, formatEV } from './utils';

interface BetCardProps {
  bet: Bet;
  onClick: () => void;
}

export const BetCard: React.FC<BetCardProps> = ({ bet, onClick }) => {
  return (
    <div className="bet-card" onClick={onClick}>
      <div className="bet-header">
        <div className="sport-info">
          <span className="sport">{bet.sport}</span>
          <span className="league">{bet.league}</span>
        </div>
        <div className="ev-badge">{formatEV(bet.expectedValue)} EV</div>
      </div>
      
      <div className="matchup">
        <div className="team">{bet.awayTeam}</div>
        <div className="vs">@</div>
        <div className="team">{bet.homeTeam}</div>
      </div>
      
      <div className="bet-info">
        <div className="bet-type">
          {bet.betType}
          {bet.line && <span className="line"> {bet.line}</span>}
        </div>
        <div className="odds">{formatOdds(bet.odds)}</div>
      </div>
      
      <div className="bet-footer">
        <div className="bookmaker">{bet.bookmaker}</div>
        <div className="time-remaining">{formatTimeRemaining(bet.eventDate)}</div>
      </div>
    </div>
  );
};
