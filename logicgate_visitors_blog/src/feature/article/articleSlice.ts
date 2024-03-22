import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../interfaces/interfaces";
import { getArticles } from "../../api/article/getArticles";

interface ArticlesState {
  articles: IArticle[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ArticlesState = {
  articles: [],
  loading: "idle",
  error: null,
};

export const getArticlesAsync = createAsyncThunk(
  "articles/getArticles",
  async () => {
    return await getArticles();
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesAsync.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        getArticlesAsync.fulfilled,
        (state, action: PayloadAction<IArticle[]>) => {
          state.loading = "succeeded";
          state.articles = action.payload;
        }
      )
      .addCase(
        getArticlesAsync.rejected,
        (state, action: PayloadAction<string>) => {
          state.loading = "failed";
          state.error = action.payload;
        }
      );
  },
});

export const selectArticles = (state: RootState) => state.articles.articles;

export default articlesSlice.reducer;
