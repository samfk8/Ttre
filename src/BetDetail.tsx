import React from 'react';
import { Bet } from './types';
import { formatDateTime, formatOdds, formatEV, formatTimeRemaining } from './utils';

interface BetDetailProps {
  bet: Bet;
  onClose: () => void;
}

export const BetDetail: React.FC<BetDetailProps> = ({ bet, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="detail-header">
          <h2>Bet Details</h2>
          <div className="ev-badge-large">{formatEV(bet.expectedValue)} EV</div>
        </div>
        
        <div className="detail-section">
          <h3>Event Information</h3>
          <div className="detail-row">
            <span className="label">Sport:</span>
            <span className="value">{bet.sport} - {bet.league}</span>
          </div>
          <div className="detail-row">
            <span className="label">Matchup:</span>
            <span className="value">{bet.awayTeam} @ {bet.homeTeam}</span>
          </div>
          <div className="detail-row">
            <span className="label">Event Time:</span>
            <span className="value">{formatDateTime(bet.eventDate)}</span>
          </div>
          <div className="detail-row">
            <span className="label">Time Remaining:</span>
            <span className="value">{formatTimeRemaining(bet.eventDate)}</span>
          </div>
        </div>
        
        <div className="detail-section">
          <h3>Bet Information</h3>
          <div className="detail-row">
            <span className="label">Bet Type:</span>
            <span className="value">{bet.betType}</span>
          </div>
          {bet.line && (
            <div className="detail-row">
              <span className="label">Line:</span>
              <span className="value">{bet.line}</span>
            </div>
          )}
          <div className="detail-row">
            <span className="label">Odds:</span>
            <span className="value">{formatOdds(bet.odds)} (Decimal: {bet.odds.toFixed(2)})</span>
          </div>
          <div className="detail-row">
            <span className="label">Bookmaker:</span>
            <span className="value">{bet.bookmaker}</span>
          </div>
        </div>
        
        <div className="detail-section">
          <h3>Value Analysis</h3>
          <div className="detail-row">
            <span className="label">Expected Value:</span>
            <span className="value ev-highlight">{formatEV(bet.expectedValue)}</span>
          </div>
          <div className="detail-row">
            <span className="label">Implied Probability:</span>
            <span className="value">{bet.probability.toFixed(1)}%</span>
          </div>
          <div className="detail-row">
            <span className="label">Bookmaker Margin:</span>
            <span className="value">{((1 / bet.odds) * 100).toFixed(1)}%</span>
          </div>
        </div>
        
        <div className="detail-info">
          <p><strong>Note:</strong> Expected Value (EV) represents the average profit you can expect from this bet over the long run. A positive EV indicates a profitable bet opportunity.</p>
        </div>
      </div>
    </div>
  );
};
