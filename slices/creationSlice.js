import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
};

const creationSlice = createSlice({
    name: "creation",
    initialState,
    reducers: {

    },
});

export const { searchForBooks, selectBook, viewBookType, selectChapter, setCurrentBook } = creationSlice.actions;
export default creationSlice.reducer;