import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
});

// Simple in-memory cache
const cache = {};
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

const getCached = (key) => {
  const entry = cache[key];
  if (entry && Date.now() - entry.time < CACHE_TTL) return entry.data;
  return null;
};
const setCache = (key, data) => { cache[key] = { data, time: Date.now() }; };

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Itinerary API
export const generateItinerary = async (travelData) => {
  try {
    console.log('Sending travel data to backend:', travelData);
    const response = await api.post('/generate-itinerary', travelData);
    console.log('Received response from backend:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    // Return structured error for better handling
    throw {
      message: error.response?.data?.detail || error.message || 'Failed to generate itinerary',
      status: error.response?.status || 500,
      data: error.response?.data
    };
  }
};

export const getPopularDestinations = async () => {
  const cacheKey = 'popular_destinations';
  const cached = getCached(cacheKey);
  if (cached) return cached;
  try {
    const response = await api.get('/destinations/popular');
    setCache(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const getWeather = async (city) => {
  const cacheKey = `weather_${city}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;
  try {
    const response = await api.get(`/weather/${city}`);
    setCache(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error('Weather API Error:', error);
    throw error;
  }
};

export const getRecommendations = async (preferences) => {
  try {
    const response = await api.post('/recommendations', preferences);
    return response.data;
  } catch (error) {
    console.error('Recommendations API Error:', error);
    throw error;
  }
};

export const getBudgetBreakdown = async (destination, budget, duration) => {
  const cacheKey = `budget_${destination}_${budget}_${duration}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;
  try {
    const response = await api.get(`/budget-breakdown/${destination}?budget=${budget}&duration=${duration}`);
    setCache(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error('Budget Breakdown API Error:', error);
    throw error;
  }
};

export default api;