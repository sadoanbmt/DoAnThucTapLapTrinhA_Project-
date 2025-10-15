import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "Alt Shift F",

    personalLibrary: [],

    currentBook: null,
    chaptersOfCurrentBook: null,
    currentChaper: null,

    creationIdList: [],
};

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        addNewCreationId: (state, action) => {
            state.creationIdList = [action.payload, ...state.creationIdList];
        },
    },
});

export const { addNewCreationId } = accountSlice.actions;
export default accountSlice.reducer;