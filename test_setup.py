"""
Test script to verify the Sports Odds API client setup without making actual API calls.

This script tests:
1. Module imports
2. Client initialization with API key
3. Error handling for missing API key
"""

import sys


def test_imports():
    """Test that all required modules can be imported."""
    print("Testing imports...")
    
    try:
        from sports_odds_api import SportsGameOdds
        print("  ✓ sports_odds_api imported successfully")
    except ImportError as e:
        print(f"  ✗ Failed to import sports_odds_api: {e}")
        return False
    
    try:
        from dotenv import load_dotenv
        print("  ✓ python-dotenv imported successfully")
    except ImportError as e:
        print(f"  ✗ Failed to import python-dotenv: {e}")
        return False
    
    try:
        from sports_odds_client import get_api_client, SportsOddsClient
        print("  ✓ sports_odds_client module imported successfully")
    except ImportError as e:
        print(f"  ✗ Failed to import sports_odds_client: {e}")
        return False
    
    return True


def test_client_initialization():
    """Test client initialization with and without API key."""
    print("\nTesting client initialization...")
    
    from sports_odds_client import get_api_client, SportsOddsClient
    
    # Test 1: No API key should raise ValueError
    try:
        client = get_api_client()
        print("  ✗ Should have raised ValueError for missing API key")
        return False
    except ValueError as e:
        if "API key is required" in str(e):
            print("  ✓ Correctly raises ValueError when API key is missing")
        else:
            print(f"  ✗ Unexpected error message: {e}")
            return False
    
    # Test 2: With API key should initialize
    try:
        client = get_api_client(api_key="test_key_12345")
        print("  ✓ Client initializes successfully with API key")
    except Exception as e:
        print(f"  ✗ Failed to initialize with API key: {e}")
        return False
    
    # Test 3: Check client has expected attributes
    try:
        if hasattr(client, 'client') and hasattr(client, 'get_events'):
            print("  ✓ Client has expected methods")
        else:
            print("  ✗ Client missing expected methods")
            return False
    except Exception as e:
        print(f"  ✗ Error checking client attributes: {e}")
        return False
    
    return True


def test_configuration():
    """Test that configuration files exist."""
    print("\nTesting configuration...")
    
    import os
    
    required_files = [
        'requirements.txt',
        '.env.example',
        '.gitignore',
        'sports_odds_client.py',
        'example_usage.py',
        'README.md'
    ]
    
    all_exist = True
    for filename in required_files:
        if os.path.exists(filename):
            print(f"  ✓ {filename} exists")
        else:
            print(f"  ✗ {filename} missing")
            all_exist = False
    
    return all_exist


def main():
    """Run all tests."""
    print("=" * 80)
    print("Sports Odds API Setup Test")
    print("=" * 80)
    
    tests = [
        ("Imports", test_imports),
        ("Client Initialization", test_client_initialization),
        ("Configuration Files", test_configuration),
    ]
    
    results = []
    for test_name, test_func in tests:
        try:
            result = test_func()
            results.append((test_name, result))
        except Exception as e:
            print(f"\n✗ Test '{test_name}' failed with exception: {e}")
            results.append((test_name, False))
    
    # Print summary
    print("\n" + "=" * 80)
    print("Test Summary")
    print("=" * 80)
    
    passed = sum(1 for _, result in results if result)
    total = len(results)
    
    for test_name, result in results:
        status = "✓ PASS" if result else "✗ FAIL"
        print(f"{status}: {test_name}")
    
    print(f"\nTotal: {passed}/{total} tests passed")
    
    if passed == total:
        print("\n🎉 All tests passed! The setup is complete.")
        print("\nNext steps:")
        print("1. Get your API key from https://sportsgameodds.com/pricing")
        print("2. Copy .env.example to .env and add your API key")
        print("3. Run: python example_usage.py")
        return 0
    else:
        print("\n⚠️  Some tests failed. Please check the errors above.")
        return 1


if __name__ == "__main__":
    sys.exit(main())
