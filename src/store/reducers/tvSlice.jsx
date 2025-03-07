import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: null,
};

export const tvSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {
        loadmovie: (state, action) => {
            state.info = action.payload;
        },
        removemovie: (state) => {
            state.info = null;
        },
        removetv: (state) => {  // ✅ Added removetv reducer
            state.info = null;
        },
    },
});

// ✅ Now exporting removetv
export const { loadmovie, removemovie, removetv } = tvSlice.actions;

export default tvSlice.reducer;
