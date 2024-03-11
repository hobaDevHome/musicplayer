import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTracks = createAsyncThunk(
  "tracks/fetchTracks",

  async () => {
    const response = await getDocs(collection(db, "tracks"));
    return {
      list: response.docs.map((data) => {
        return { ...data.data(), id: data.id };
      }),
    };
  }
);

const tracksSlice = createSlice({
  name: "tracks",
  initialState: {
    tracks: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTracks.pending, (state) => {
      state.status = "loading";
    });
  },
});

export default tracksSlice.reducer;

export const selectTracks = (state) => state.tracks.tracks;
export const selectStatus = (state) => state.tracks.status;
export const selectError = (state) => state.tracks.error;
