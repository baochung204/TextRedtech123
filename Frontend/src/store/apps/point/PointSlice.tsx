import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetAllPoints, GetPointById } from './PointApi';

export const fetchPoints = createAsyncThunk('points/fetchPoints', async () => {
  const data = await GetAllPoints();
  return data;
});

export const fetchPointById = createAsyncThunk('points/fetchPointById', async (id: string) => {
  const data = await GetPointById(id);
  return data;
});

interface PointsState {
  points: any[];
  loading: boolean;
  error: string | null;
}

const initialState: PointsState = {
  points: [],
  loading: false,
  error: null,
};

const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPoints.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPoints.fulfilled, (state, action) => {
        state.loading = false;
        state.points = action.payload;
      })
      .addCase(fetchPoints.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch points';
      })
      .addCase(fetchPointById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPointById.fulfilled, (state, action) => {
        state.loading = false;
        const point = action.payload;
        const existingIndex = state.points.findIndex((p) => p.id === point.id);
        if (existingIndex !== -1) {
          state.points[existingIndex] = point;
        }
      })
      .addCase(fetchPointById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch point';
      });
  },
});

export default pointsSlice.reducer;
