# Ttre

Sports Odds API Integration using the SportsGameOdds Python SDK.

## Overview

This project provides a Python integration with the [SportsGameOdds API](https://github.com/SportsGameOdds/sports-odds-api-python), allowing you to access sports betting odds data from over 55 leagues and 80+ sportsbooks.

## Features

- 🏈 Access to odds for 55+ sports leagues
- 📊 Coverage of 80+ sportsbooks
- 💰 Moneylines, spreads, totals, and props
- 🔄 Sub-minute odds updates
- 🆓 Generous free tier for developers
- 🐍 Type-safe Python SDK with Pydantic models

## Prerequisites

- Python 3.8 or higher
- A SportsGameOdds API key (free tier available)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/samfk8/Ttre.git
cd Ttre
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

This will install:
- `sports-odds-api`: The official SportsGameOdds Python SDK
- `python-dotenv`: For environment variable management

### 3. Get Your API Key

1. Visit [sportsgameodds.com/pricing](https://sportsgameodds.com/pricing)
2. Sign up for a free "Amateur" plan
3. Complete the checkout process (credit card may be required for verification, but won't be charged)
4. Your API key will be emailed to you (check spam folder if not received)

### 4. Configure Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit the `.env` file and add your API key:

```
SPORTS_ODDS_API_KEY=your_actual_api_key_here
```

⚠️ **Important:** Never commit your `.env` file or share your API key publicly!

## Usage

### Basic Example

Run the example script to fetch sports events:

```bash
python example_usage.py
```

This will display the latest sports events with team information and odds data.

### Using the API Client in Your Code

```python
from sports_odds_client import get_api_client

# Initialize the client (reads API key from .env)
client = get_api_client()

# Fetch events
page = client.get_events(limit=5)

# Display event information
for event in page.data:
    print(f"{event.teams.away.name} @ {event.teams.home.name}")
```

### Advanced Usage

For more advanced features, access the underlying SDK client:

```python
from sports_odds_client import get_api_client

client = get_api_client()
sdk_client = client.get_client()

# Now you can use all SDK features
# See: https://sportsgameodds.com/docs/v2/sdk
```

## Project Structure

```
Ttre/
├── .env.example           # Example environment configuration
├── .gitignore            # Git ignore rules
├── requirements.txt      # Python dependencies
├── sports_odds_client.py # API client wrapper
├── example_usage.py      # Example usage script
├── test_setup.py         # Setup validation test script
├── QUICKSTART.md         # Quick start guide
└── README.md            # This file
```

## API Documentation

- **SDK Documentation:** [https://sportsgameodds.com/docs/v2/sdk](https://sportsgameodds.com/docs/v2/sdk)
- **API Reference:** [https://sportsgameodds.com/docs/](https://sportsgameodds.com/docs/)
- **GitHub Repository:** [https://github.com/SportsGameOdds/sports-odds-api-python](https://github.com/SportsGameOdds/sports-odds-api-python)
- **Examples:** [https://github.com/SportsGameOdds/sports-odds-api-python/tree/main/examples](https://github.com/SportsGameOdds/sports-odds-api-python/tree/main/examples)

## Available Data

The API provides access to:

- **Sports Events:** Upcoming and live games
- **Odds Markets:** Moneylines, spreads, totals, props
- **Sportsbooks:** 80+ major sportsbooks
- **Leagues:** NFL, NBA, MLB, NHL, Soccer, UFC, and 50+ more
- **Live Scores:** Real-time game scores and updates
- **Historical Data:** Past events and odds

## Troubleshooting

### "API key is required" Error

Make sure you:
1. Created a `.env` file in the project root
2. Added your API key to the `.env` file
3. The API key is valid and active

### Import Errors

If you see import errors, ensure all dependencies are installed:

```bash
pip install -r requirements.txt
```

### Connection Errors

Check that:
1. You have internet connectivity
2. Your API key is valid and not expired
3. You haven't exceeded your API rate limits

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For API-related issues:
- Visit the [SportsGameOdds Documentation](https://sportsgameodds.com/docs/)
- Contact SportsGameOdds support

For project-specific issues:
- Open an issue on this repository

## Credits

This project uses the [SportsGameOdds API](https://sportsgameodds.com/) and their official Python SDK.