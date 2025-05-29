
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface WeatherData {
  location: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  forecast: Array<{
    date: string;
    temperature: number;
    description: string;
  }>;
}

interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (location: string) => {
    // Mock data for demonstration
    return {
      location,
      temperature: 22,
      description: 'Partly cloudy',
      humidity: 65,
      windSpeed: 15,
      forecast: [
        { date: '2024-01-01', temperature: 24, description: 'Sunny' },
        { date: '2024-01-02', temperature: 20, description: 'Cloudy' },
        { date: '2024-01-03', temperature: 18, description: 'Rainy' },
      ],
    };
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch weather data';
      });
  },
});

export default weatherSlice.reducer;
