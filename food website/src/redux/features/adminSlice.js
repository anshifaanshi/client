import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isadminExist: false,
    mentor: {},
};

export const adminSlice = createSlice({
    name: "mentor",
    initialState,
    reducers: {
        saveadmin: (state, action) => {
            state.isadminExist = true;
            state.mentor = action.payload;
        },
        clearadmin: (state) => {
            state.isadminExist = false;
            state.admin = {};
        },
    },
});

// Action creators are generated for each case reducer function
export const { saveadmin, clearadmin } = adminSlice.actions;

export default adminSlice.reducer;