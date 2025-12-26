# Ttre - EV Betting Dashboard

An app that uses API to show good Expected Value (EV) bets within 72 hours and displays detailed information about each bet.

## Features

- 🎯 Display EV bets with positive expected value within 72 hours
- 📊 Summary statistics (Available Bets, Top EV, Average EV)
- 🏀 Filter bets by sport (Basketball, Football, Hockey)
- 📱 Responsive design with modern UI
- 🔍 Detailed bet information modal showing:
  - Event information (sport, league, matchup, time)
  - Bet details (type, odds, bookmaker)
  - Value analysis (EV, implied probability, bookmaker margin)

## Tech Stack

- React 18 with TypeScript
- Vite for fast development and building
- CSS for styling
- Mock API service (ready to connect to real EV betting API)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── App.tsx          # Main application component
├── App.css          # Application styles
├── BetCard.tsx      # Bet card component for list view
├── BetDetail.tsx    # Bet detail modal component
├── types.ts         # TypeScript type definitions
├── api.ts           # API service (mock data)
├── utils.ts         # Utility functions for formatting
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## API Integration

The app currently uses mock data. To integrate with a real EV betting API:

1. Update the `fetchEVBets()` function in `src/api.ts`
2. Replace the mock data with actual API calls
3. Ensure the API returns data matching the `Bet` interface in `src/types.ts`

## Screenshots

### Main Dashboard
![Main Dashboard](https://github.com/user-attachments/assets/ccf54b3f-6823-4561-bdc9-cbcd60f6a5c1)

### Bet Details Modal
![Bet Details](https://github.com/user-attachments/assets/c067834e-c5f8-4f0c-8470-214e3d6f4011)

### Filtered View (Basketball)
![Filtered View](https://github.com/user-attachments/assets/87718557-7f76-47e7-b0a6-13caf37e581f)