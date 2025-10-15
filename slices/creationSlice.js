import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addNewBook, addNewChapter, setUserCreation, updateChapter } from "./bookSlice";
import { addNewCreationId } from "./accountSlice";

const null_metaData = {
    bookId: null,
    progressStatus: null,
    type: null,
    title: null,
    author: null,
    language: null,
    translator: null,
    series: null,
    bookNum: 1,
    cover: null,
    publishDate: null,
    genreList: [],
    description: null,
    pageCount: 0,
    readCount: 0,
}

const null_chapter = {
    bookId: null,
    chapterNum: null,
    publishDate: null,
    lastUpdateDate: null,
    chapterTitle: null,
    chapterContent: null,
}

const initialState = {
    newBook_metaData: {
        bookId: null,
        progressStatus: null,
        type: null,
        title: null,
        author: null,
        language: null,
        translator: null,
        series: null,
        bookNum: 1,
        cover: null,
        publishDate: null,
        genreList: [],
        description: null,
        pageCount: 0,
        readCount: 0,
    },
    newBook_chapter: {
        bookId: null,
        chapterId: null,
        chapterNum: null,
        publishDate: null,
        lastUpdateDate: null,
        chapterTitle: null,
        chapterContent: null,
    },
    createStoryScreen_Page_Mode: null,
    chapterToEdit: null,
};

export const finalizeCreation = createAsyncThunk(
    'creation/createNewBook',
    async (_, { getState, dispatch }) => {
        const state = getState();
        const { newBook_metaData, newBook_chapter } = state.creation;

        dispatch(addNewBook(newBook_metaData));
        dispatch(addNewChapter(newBook_chapter));
        dispatch(setUserCreation(newBook_metaData.bookId));
        dispatch(addNewCreationId(newBook_metaData.bookId));
        dispatch(resetState());
        return {
            bookId: newBook_metaData.bookId,
            metadata: newBook_metaData,
            chapter: newBook_chapter
        };
    }
);
export const finalizeChapterCreation = createAsyncThunk(
    'creation/createNewChapter',
    async (_, { getState, dispatch }) => {
        const state = getState();
        const { newBook_chapter } = state.creation;

        dispatch(addNewChapter(newBook_chapter));
        dispatch(setUserCreation(newBook_chapter.bookId));
        dispatch(resetState());
        return {
            chapter: newBook_chapter
        };
    }
);
export const finalizeChapterUpdate = createAsyncThunk(
    'creation/updateChapter',
    async (_, { getState, dispatch }) => {
        const state = getState();
        const { newBook_chapter } = state.creation;

        dispatch(updateChapter(newBook_chapter));
        dispatch(setUserCreation(newBook_chapter.bookId));
        dispatch(resetState());
        return {
            chapter: newBook_chapter
        };
    }
);

const creationSlice = createSlice({
    name: "creation",
    initialState,
    reducers: {
        setBookDetail: (state, action) => {
            console.log(action.payload);

            state.newBook_metaData.type = action.payload.type;
            state.newBook_metaData.title = action.payload.title;
            state.newBook_metaData.series = action.payload.series;
            state.newBook_metaData.description = action.payload.description;
        },
        setBookMoreDetail: (state, action) => {
            console.log(action.payload);

            state.newBook_metaData.author = action.payload.author;
            state.newBook_metaData.genreList = action.payload.genreList;
            state.newBook_metaData.language = action.payload.language;
            state.newBook_metaData.translator = action.payload.translator;
        },
        setBookChapter: (state, action) => {
            console.log(action.payload);

            state.newBook_chapter.chapterTitle = action.payload.chapterTitle;
            state.newBook_chapter.chapterContent = action.payload.chapterContent;
        },
        initNewBook: (state) => {
            const bookId = Date.now().toString();
            const date = new Date();
            const today = date.toLocaleDateString();
            const todayNumber = today.split("/");
            const todayFormated = todayNumber[1] + "/" + todayNumber[0] + "/" + todayNumber[2];

            state.newBook_metaData.progressStatus = "đang cập nhật";

            state.newBook_metaData.bookId = bookId;
            state.newBook_chapter.bookId = bookId;
            state.newBook_chapter.chapterId = bookId;

            state.newBook_metaData.publishDate = todayFormated;
            state.newBook_chapter.publishDate = todayFormated;
            state.newBook_chapter.lastUpdateDate = todayFormated;

            state.newBook_chapter.chapterNum = 1;

            console.log("Initialized new book with ID:", bookId);
            console.log(state.newBook_metaData);
            console.log(state.newBook_chapter);
        },
        initNewChapter: (state, action) => {
            const bookId = action.payload.bookId;
            const chapterId = Date.now().toString();
            const date = new Date();
            const today = date.toLocaleDateString();

            const todayNumber = today.split("/");
            const todayFormated = todayNumber[1] + "/" + todayNumber[0] + "/" + todayNumber[2];

            state.newBook_chapter.bookId = bookId;
            state.newBook_chapter.chapterId = chapterId;
            state.newBook_chapter.chapterNum = action.payload.chapterNum;
            state.newBook_chapter.publishDate = todayFormated;
            state.newBook_chapter.lastUpdateDate = todayFormated;

            console.log("Initialized new chapter with ID:", chapterId);
            console.log("Initialized new chapter for book with ID:", bookId);
        },
        initUpdatedChapter: (state) => {
            console.log(state.chapterToEdit);
            const date = new Date();
            const today = date.toLocaleDateString();

            const todayNumber = today.split("/");
            const todayFormated = todayNumber[1] + "/" + todayNumber[0] + "/" + todayNumber[2];

            state.newBook_chapter.bookId = state.chapterToEdit.bookId;
            state.newBook_chapter.chapterId = state.chapterToEdit.chapterId;
            state.newBook_chapter.chapterNum = state.chapterToEdit.chapterNum;
            state.newBook_chapter.publishDate = state.chapterToEdit.publishDate;

            state.newBook_chapter.lastUpdateDate = todayFormated;
            console.log(state.newBook_chapter);
        },
        resetState: (state) => {
            state.newBook_metaData = null_metaData;
            state.newBook_chapter = null_chapter;
        },
        setCreateStoryScreen_Page_Mode: (state, action) => {
            state.createStoryScreen_Page_Mode = action.payload;
        },
        setChapterToEdit: (state, action) => {
            state.chapterToEdit = action.payload;
        }
    }
});

export const {
    setBookDetail,
    setBookMoreDetail,
    setBookChapter,
    initNewBook,
    initNewChapter,
    initUpdatedChapter,
    resetState,
    setCreateStoryScreen_Page_Mode,
    setChapterToEdit
} = creationSlice.actions;
export default creationSlice.reducer;