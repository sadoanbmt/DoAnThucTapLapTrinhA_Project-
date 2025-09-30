import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookDatabase: require('../assets/_bookDatabase.json'),

    selectedBook: null,

    viewBookType: null,
    viewBookList: [],

    searchType: null,
    searchKeyword: null,
    searchResultList: [],
};

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        searchForBooks: (state, action) => {
            state.searchResultList = [];

            console.log(action.payload)

            const searchType = action.payload.searchType;
            const searchKeyword = action.payload.searchKeyword;

            state.searchType = searchType;
            state.searchKeyword = searchKeyword;

            // state.searchResultList = state.bookDatabase.filter(book => book.title == searchKeyword);
            // state.searchResultList = [...state.searchResultList, ...(state.bookDatabase.filter(book => book.series == searchKeyword)) || null];
            // state.searchResultList = [...state.searchResultList, ...(state.bookDatabase.filter(book => book.author == searchKeyword)) || null];

            state.searchResultList = [...state.bookDatabase];
        },
        clearSearchResultList: (state) => {
            state.searchType = null;
            state.searchKeyword = null;
            state.searchResultList = [];
        },
        selectBook: (state, action) => {
            const bookSelected = action.payload;
            state.selectedBook = state.bookDatabase.find(book => book.title == bookSelected);
        },
        clearSelectedBook: (state) => {
            state.selectedBook = state.selectedBook = null;
        },
        viewBookType: (state, action) => {
            const viewBookType = action.payload.toLowerCase();
            state.viewBookType = viewBookType;
            state.viewBookList = state.bookDatabase.filter(book => book.type == viewBookType) || null;
        },
        clearViewBookType: (state) => {
            state.viewBookType = null;
            state.viewBookList = null;
        }
    },
});

export const { searchForBooks, selectBook, viewBookType } = bookSlice.actions;
export default bookSlice.reducer;