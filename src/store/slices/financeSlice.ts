
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  high: number;
  low: number;
  chartData: Array<{ date: string; price: number }>;
}

interface FinanceState {
  stocks: StockData[];
  loading: boolean;
  error: string | null;
  selectedStock: string;
}

const initialState: FinanceState = {
  stocks: [],
  loading: false,
  error: null,
  selectedStock: 'AAPL',
};

export const fetchStockData = createAsyncThunk(
  'finance/fetchStockData',
  async (symbol: string) => {
    // Mock data for demonstration
    return {
      symbol,
      name: 'Apple Inc.',
      price: 150.25,
      change: 2.35,
      changePercent: 1.59,
      volume: 75000000,
      high: 152.10,
      low: 148.50,
      chartData: [
        { date: '2024-01-01', price: 148.0 },
        { date: '2024-01-02', price: 149.5 },
        { date: '2024-01-03', price: 150.25 },
      ],
    };
  }
);

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    setSelectedStock: (state, action) => {
      state.selectedStock = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockData.fulfilled, (state, action) => {
        state.loading = false;
        const existingIndex = state.stocks.findIndex(
          stock => stock.symbol === action.payload.symbol
        );
        if (existingIndex >= 0) {
          state.stocks[existingIndex] = action.payload;
        } else {
          state.stocks.push(action.payload);
        }
      })
      .addCase(fetchStockData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch stock data';
      });
  },
});

export const { setSelectedStock } = financeSlice.actions;
export default financeSlice.reducer;
