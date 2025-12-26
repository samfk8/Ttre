import { useState, useEffect } from 'react';
import { Bet } from './types';
import { fetchEVBets } from './api';
import { BetCard } from './BetCard';
import { BetDetail } from './BetDetail';
import './App.css';

function App() {
  const [bets, setBets] = useState<Bet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBet, setSelectedBet] = useState<Bet | null>(null);
  const [filterSport, setFilterSport] = useState<string>('all');

  useEffect(() => {
    loadBets();
  }, []);

  const loadBets = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchEVBets();
      setBets(data);
    } catch (err) {
      setError('Failed to load bets. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredBets = filterSport === 'all' 
    ? bets 
    : bets.filter(bet => bet.sport === filterSport);

  const sports = ['all', ...Array.from(new Set(bets.map(bet => bet.sport)))];

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎯 EV Betting Dashboard</h1>
        <p className="subtitle">Good bets within 72 hours</p>
      </header>

      <div className="controls">
        <button className="refresh-button" onClick={loadBets} disabled={loading}>
          {loading ? '⟳ Loading...' : '↻ Refresh'}
        </button>
        
        <div className="filter-buttons">
          {sports.map(sport => (
            <button
              key={sport}
              className={`filter-button ${filterSport === sport ? 'active' : ''}`}
              onClick={() => setFilterSport(sport)}
            >
              {sport === 'all' ? 'All Sports' : sport}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading EV bets...</p>
        </div>
      )}

      {error && (
        <div className="error">
          <p>{error}</p>
          <button onClick={loadBets}>Try Again</button>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="stats">
            <div className="stat-card">
              <div className="stat-value">{filteredBets.length}</div>
              <div className="stat-label">Available Bets</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">
                {filteredBets.length > 0 
                  ? `+${filteredBets[0].expectedValue.toFixed(1)}%` 
                  : 'N/A'}
              </div>
              <div className="stat-label">Top EV</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">
                {filteredBets.length > 0
                  ? `+${(filteredBets.reduce((sum, bet) => sum + bet.expectedValue, 0) / filteredBets.length).toFixed(1)}%`
                  : 'N/A'}
              </div>
              <div className="stat-label">Avg EV</div>
            </div>
          </div>

          {filteredBets.length === 0 ? (
            <div className="no-bets">
              <p>No bets found matching your filters.</p>
            </div>
          ) : (
            <div className="bets-grid">
              {filteredBets.map(bet => (
                <BetCard 
                  key={bet.id} 
                  bet={bet} 
                  onClick={() => setSelectedBet(bet)}
                />
              ))}
            </div>
          )}
        </>
      )}

      {selectedBet && (
        <BetDetail 
          bet={selectedBet} 
          onClose={() => setSelectedBet(null)}
        />
      )}
    </div>
  );
}

export default App;
