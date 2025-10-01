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

            const searchType = action.payload.searchType;
            const searchKeyword = action.payload.searchKeyword;

            state.searchType = searchType;
            state.searchKeyword = searchKeyword;

            switch (searchType.toLowerCase()) {
                case "tìm kiếm": {
                    state.searchResultList = state.bookDatabase.filter(book => book.title.toLowerCase().trim() == searchKeyword.toLowerCase().trim());
                    state.searchResultList = [...state.searchResultList, ...(state.bookDatabase.filter(book => book.series.toLowerCase().trim() == searchKeyword.toLowerCase().trim())) || null];
                    state.searchResultList = [...state.searchResultList, ...(state.bookDatabase.filter(book => book.author.toLowerCase().trim() == searchKeyword.toLowerCase().trim())) || null];
                    state.searchResultList = [...state.searchResultList, ...(state.bookDatabase.filter(book => book.genreList.includes(searchKeyword))) || null];
                } break;
                case "tác giả": {
                    state.searchResultList = state.bookDatabase.filter(book => book.author.toLowerCase().trim() == searchKeyword.toLowerCase().trim());
                } break;
                case "thể loại": {
                    state.searchResultList = state.bookDatabase.filter(book => book.genreList.includes(searchKeyword));
                } break;
                case "series": {
                    state.searchResultList = [...state.searchResultList, ...(state.bookDatabase.filter(book => book.series.toLowerCase().trim() == searchKeyword.toLowerCase().trim())) || null];
                } break;
                default:
                    console.log("unknown searchType");
            }
            state.searchResultList = [...new Set(state.searchResultList)];
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