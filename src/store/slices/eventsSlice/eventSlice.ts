import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
}

interface Registration {
  eventId: number | string | undefined;
  name: string;
  email: string;
  phone: string;
}

interface EventsState {
  events: Event[];
  registrations: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: EventsState = {
  events: [],
  registrations: [],
  status: 'idle',
};

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data as Event[];
});

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    registerForEvent: (state, action: PayloadAction<any>) => {
      state.registrations.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEvents.fulfilled, (state, action: PayloadAction<Event[]>) => {
        state.status = 'succeeded';
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { registerForEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
