# Quick Start Guide

Get up and running with the Sports Odds API in 5 minutes!

## Step 1: Install Dependencies (1 minute)

```bash
pip install -r requirements.txt
```

## Step 2: Get Your API Key (2 minutes)

1. Go to https://sportsgameodds.com/pricing
2. Sign up for the free plan
3. Check your email for the API key

## Step 3: Configure Environment (1 minute)

```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your API key
# Change: SPORTS_ODDS_API_KEY=your_api_key_here
# To: SPORTS_ODDS_API_KEY=your_actual_key_from_email
```

## Step 4: Run the Example (1 minute)

```bash
python example_usage.py
```

You should see sports events and odds data printed to the console!

## What's Next?

### Explore More Examples

Check out the official examples:
https://github.com/SportsGameOdds/sports-odds-api-python/tree/main/examples

### Read the API Documentation

Full API docs:
https://sportsgameodds.com/docs/

### Use the Client in Your Code

```python
from sports_odds_client import get_api_client

# Initialize client
client = get_api_client()

# Get events
page = client.get_events(limit=10)

# Process events
for event in page.data:
    print(f"{event.teams.away.name} vs {event.teams.home.name}")
```

### Access Advanced Features

Get the underlying SDK for full control:

```python
from sports_odds_client import get_api_client

client = get_api_client()
sdk = client.get_client()

# Now use any SDK method
# See: https://sportsgameodds.com/docs/v2/sdk
```

## Common Issues

### "API key is required" Error

**Solution:** Make sure your `.env` file exists and contains a valid API key.

### "Module not found" Error

**Solution:** Install dependencies with `pip install -r requirements.txt`

### No Events Returned

**Possible causes:**
- API key may be invalid or expired
- You may have exceeded rate limits (wait a bit and try again)
- No events currently available (less likely)

## Available Data

With the free tier, you can access:
- ✅ Real-time odds from 80+ sportsbooks
- ✅ 55+ sports leagues (NFL, NBA, MLB, NHL, Soccer, etc.)
- ✅ Moneylines, spreads, totals
- ✅ Player props and team props
- ✅ Live scores and updates

## Rate Limits

Check your plan's rate limits at:
https://sportsgameodds.com/pricing

The free "Amateur" plan is generous for development and testing!

## Need Help?

- **API Documentation:** https://sportsgameodds.com/docs/
- **SDK Guide:** https://sportsgameodds.com/docs/v2/sdk
- **Support:** Contact SportsGameOdds support
- **GitHub Issues:** Open an issue on this repository
