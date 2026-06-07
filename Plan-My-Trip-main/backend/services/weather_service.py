import requests
import os
from typing import Dict, Any
from datetime import datetime, timedelta

# Simple cache — weather valid for 30 minutes
_weather_cache: Dict[str, Any] = {}
_CACHE_MINUTES = 30

class WeatherService:
    def __init__(self):
        self.api_key = os.getenv("WEATHER_API_KEY", "HGBVXJ73SNUMKYLE57YG77JE8")
        self.base_url = "http://api.weatherapi.com/v1"

    def _is_cached(self, key: str) -> bool:
        entry = _weather_cache.get(key)
        if not entry:
            return False
        return datetime.now() - entry['time'] < timedelta(minutes=_CACHE_MINUTES)

    def get_weather(self, city: str) -> Dict[str, Any]:
        key = f"weather_{city.lower()}"
        if self._is_cached(key):
            return _weather_cache[key]['data']
        try:
            url = f"{self.base_url}/current.json"
            params = {"key": self.api_key, "q": city, "aqi": "no"}
            response = requests.get(url, params=params, timeout=5)
            response.raise_for_status()
            data = response.json()
            result = {
                "current": {
                    "temp_c": data["current"]["temp_c"],
                    "condition": {"text": data["current"]["condition"]["text"]},
                    "humidity": data["current"]["humidity"],
                    "feelslike_c": data["current"]["feelslike_c"],
                    "wind_kph": data["current"]["wind_kph"]
                },
                "location": {
                    "name": data["location"]["name"],
                    "region": data["location"]["region"],
                    "country": data["location"]["country"]
                }
            }
            _weather_cache[key] = {'data': result, 'time': datetime.now()}
            return result
        except requests.RequestException as e:
            return {"error": f"Weather API error: {str(e)}"}
        except KeyError as e:
            return {"error": f"Unexpected weather data format: {str(e)}"}

    def get_forecast(self, city: str, days: int = 5) -> Dict[str, Any]:
        key = f"forecast_{city.lower()}_{days}"
        if self._is_cached(key):
            return _weather_cache[key]['data']
        try:
            url = f"{self.base_url}/forecast.json"
            params = {"key": self.api_key, "q": city, "days": min(days, 10), "aqi": "no", "alerts": "no"}
            response = requests.get(url, params=params, timeout=5)
            response.raise_for_status()
            data = response.json()
            daily_forecast = [
                {
                    "date": day["date"],
                    "temp_c": day["day"]["avgtemp_c"],
                    "condition": day["day"]["condition"]["text"],
                    "humidity": day["day"]["avghumidity"]
                }
                for day in data["forecast"]["forecastday"]
            ]
            result = {"location": data["location"]["name"], "forecast": daily_forecast}
            _weather_cache[key] = {'data': result, 'time': datetime.now()}
            return result
        except requests.RequestException as e:
            return {"error": f"Forecast API error: {str(e)}"}
        except (KeyError, IndexError) as e:
            return {"error": f"Unexpected forecast data format: {str(e)}"}