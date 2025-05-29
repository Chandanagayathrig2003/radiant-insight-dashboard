
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  category: string;
  publishedAt: string;
}

interface NewsState {
  articles: NewsArticle[];
  loading: boolean;
  error: string | null;
  selectedCategory: string;
}

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
  selectedCategory: 'all',
};

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (category: string) => {
    // Mock data for demonstration
    return [
      {
        id: '1',
        title: 'Technology Breakthrough in AI Development',
        description: 'Scientists make significant progress in artificial intelligence research.',
        url: '#',
        imageUrl: '/placeholder.svg',
        category: 'technology',
        publishedAt: '2024-01-01T10:00:00Z',
      },
      {
        id: '2',
        title: 'Global Markets Show Strong Performance',
        description: 'Stock markets worldwide experience positive growth trends.',
        url: '#',
        imageUrl: '/placeholder.svg',
        category: 'business',
        publishedAt: '2024-01-01T09:00:00Z',
      },
    ];
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch news';
      });
  },
});

export const { setSelectedCategory } = newsSlice.actions;
export default newsSlice.reducer;
