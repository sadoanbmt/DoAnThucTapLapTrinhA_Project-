import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookDatabase: require('../assets/_bookDatabase.json'),
    chapterDatabase: require('../assets/_chapterDatabase.json'),

    selectedBook: null,
    chaptersOfSelectedBook: [],

    currentBook: null,
    currentChapter: 0,
    chaptersOfCurrentBook: [],

    viewBookType: null,
    viewBookList: [],

    searchType: null,
    searchKeyword: null,
    searchResultList: [],

    selectedCreationId: null,
    selectedCreation: null,
    chaptersOfSelectedCreation: [],
};

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        searchForBooks: (state, action) => {
            state.searchResultList = [];

            const searchType = action.payload.searchType;
            const searchKeyword = action.payload.searchKeyword.trim();

            if (searchKeyword == null) return;

            state.searchType = searchType;
            state.searchKeyword = searchKeyword;

            switch (searchType.toLowerCase()) {
                case "tìm kiếm": {
                    const listOfKeywords = searchKeyword.split(" ");
                    console.log(listOfKeywords)
                    state.searchResultList = [...state.searchResultList,
                    ...(state.bookDatabase.filter(book => listOfKeywords.every(keyword => book.title.toLowerCase().includes(keyword.toLowerCase()))))]
                    state.searchResultList = [...state.searchResultList,
                    ...(state.bookDatabase.filter(book => listOfKeywords.every(keyword => book.series.toLowerCase().includes(keyword.toLowerCase()))))]
                    state.searchResultList = [...state.searchResultList,
                    ...(state.bookDatabase.filter(book => listOfKeywords.every(keyword => book.author.toLowerCase().includes(keyword.toLowerCase()))))]

                    state.searchResultList = [...state.searchResultList, ...(state.bookDatabase.filter(book => book.genreList.includes(searchKeyword))) || null];

                } break;
                case "tác giả": {
                    state.searchResultList = state.bookDatabase.filter(book => book.author.toLowerCase().trim() == searchKeyword.toLowerCase().trim());
                } break;
                case "dịch giả": {
                    state.searchResultList = state.bookDatabase.filter(book => book.translator.toLowerCase().trim() == searchKeyword.toLowerCase().trim());
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
        selectBook: (state, action) => {
            const bookSelected = action.payload;
            const bookId = bookSelected.bookId;

            state.selectedBook = bookSelected;
            state.chaptersOfSelectedBook = state.chapterDatabase.filter(
                chapter => chapter.bookId == bookId
            );
        },
        selectChapter: (state, action) => {
            const currentBook = action.payload.currentBook;
            const currentChapter = action.payload.currentChapter;

            if (currentBook != null) state.currentBook = currentBook;
            state.currentChapter = currentChapter;
            if (state.chaptersOfCurrentBook == null) {
                state.chaptersOfCurrentBook = state.chapterDatabase.filter(
                    chapter => chapter.bookId == currentBook.bookId
                );
            }
        },
        viewBookType: (state, action) => {
            const bookType = action.payload.toLowerCase().trim();

            state.viewBookType = bookType;
            state.viewBookList = state.bookDatabase.filter(
                book => book.type == bookType
            ) || null;
        },

        //--------------------------------------------------------------//

        addNewBook: (state, action) => {
            const newBook_metaData = action.payload;
            state.bookDatabase = [newBook_metaData, ...state.bookDatabase];
        },
        addNewChapter: (state, action) => {
            const newBook_chapter = action.payload;
            state.chapterDatabase = [newBook_chapter, ...state.chapterDatabase];
        },
        updateChapter: (state, action) => {
            const updated_chapter = action.payload;
            console.log("updateChapter", updated_chapter)
            state.chapterDatabase.forEach((chapter, index) => {
                if (chapter.chapterId == updated_chapter.chapterId) {
                    state.chapterDatabase[index] = updated_chapter;
                    return;
                }
            });
        },

        //--------------------------------------------------------------//

        setUserCreation: (state, action) => {
            const bookId = action.payload;
            state.selectedCreationId = bookId;
            state.selectedCreation = state.bookDatabase.find(
                (book) => book.bookId == bookId
            )
            state.chaptersOfSelectedCreation = state.chapterDatabase.filter(
                (chapter) => chapter.bookId == bookId
            )
        }
    },
});

export const {
    searchForBooks,
    selectBook,
    viewBookType,
    selectChapter,
    setCurrentBook,
    addNewBook,
    addNewChapter,
    updateChapter,
    setUserCreation
} = bookSlice.actions;
export default bookSlice.reducer;