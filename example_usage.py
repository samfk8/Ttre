"""
Example usage of the Sports Odds API client.

This script demonstrates how to:
1. Initialize the API client
2. Fetch sports events
3. Display event information and odds
"""

from sports_odds_client import get_api_client


def main():
    """Main function to demonstrate API usage."""
    
    try:
        # Initialize the API client (API key from environment variable)
        print("Initializing Sports Odds API client...")
        client = get_api_client()
        
        # Fetch events
        print("\nFetching sports events...")
        page = client.get_events(limit=5)
        
        # Display results
        print(f"\nFound {len(page.data)} events:\n")
        print("-" * 80)
        
        for i, event in enumerate(page.data, 1):
            print(f"\nEvent {i}:")
            print(f"  Away Team: {event.teams.away.name}")
            print(f"  Home Team: {event.teams.home.name}")
            print(f"  Event ID: {event.id}")
            
            # Display additional info if available
            if hasattr(event, 'league'):
                print(f"  League: {event.league}")
            if hasattr(event, 'start_time'):
                print(f"  Start Time: {event.start_time}")
            
            print("-" * 80)
        
        print("\n✓ Successfully retrieved odds data!")
        
    except ValueError as e:
        print(f"\n❌ Configuration Error: {e}")
        print("\nPlease ensure you have:")
        print("1. Created a .env file based on .env.example")
        print("2. Added your API key to the .env file")
        print("3. Get your API key from https://sportsgameodds.com/pricing")
        
    except Exception as e:
        print(f"\n❌ Error: {e}")
        print("\nPlease check:")
        print("1. Your API key is valid")
        print("2. You have internet connectivity")
        print("3. The sports-odds-api package is installed")


if __name__ == "__main__":
    main()
