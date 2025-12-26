"""
Sports Odds API Client

This module provides a configured client for accessing the SportsGameOdds API.
"""

import os
from dotenv import load_dotenv
from sports_odds_api import SportsGameOdds

# Load environment variables from .env file
load_dotenv()


class SportsOddsClient:
    """
    A wrapper class for the SportsGameOdds API client.
    
    This class handles initialization and provides easy access to the API.
    """
    
    def __init__(self, api_key=None):
        """
        Initialize the Sports Odds API client.
        
        Args:
            api_key (str, optional): API key for authentication. 
                                     If not provided, will look for SPORTS_ODDS_API_KEY 
                                     environment variable.
        
        Raises:
            ValueError: If no API key is provided or found in environment.
        """
        self.api_key = api_key or os.environ.get("SPORTS_ODDS_API_KEY")
        
        if not self.api_key:
            raise ValueError(
                "API key is required. Please provide it as a parameter or set "
                "the SPORTS_ODDS_API_KEY environment variable."
            )
        
        self.client = SportsGameOdds(api_key_param=self.api_key)
    
    def get_events(self, limit=10, **kwargs):
        """
        Fetch sports events with odds data.
        
        Args:
            limit (int): Maximum number of events to retrieve.
            **kwargs: Additional parameters to pass to the API.
        
        Returns:
            Page object containing event data.
        """
        return self.client.events.get(limit=limit, **kwargs)
    
    def get_client(self):
        """
        Get the underlying SportsGameOdds client for advanced usage.
        
        Returns:
            SportsGameOdds: The configured API client.
        """
        return self.client


def get_api_client(api_key=None):
    """
    Factory function to create and return a Sports Odds API client.
    
    Args:
        api_key (str, optional): API key for authentication.
    
    Returns:
        SportsOddsClient: Configured API client instance.
    """
    return SportsOddsClient(api_key=api_key)
