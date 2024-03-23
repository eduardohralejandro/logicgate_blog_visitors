import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../interfaces/interfaces";
import { getArticles } from "../../api/article/getArticles";
import { getArticle } from "../../api/article/getArticle";

interface ArticlesState {
  articles: IArticle[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  article: IArticle | object;
}

const initialState: ArticlesState = {
  articles: [],
  article: {},
  loading: "idle",
  error: null,
};

export const getArticlesAsync = createAsyncThunk(
  "articles/getArticles",
  async () => {
    return await getArticles();
  }
);

export const getArticleAsync = createAsyncThunk(
  "articles/getArticle",
  async (articleId: number) => {
    return await getArticle(articleId);
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
      )
      .addCase(getArticleAsync.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        getArticleAsync.fulfilled,
        (state, action: PayloadAction<IArticle[]>) => {
          state.loading = "succeeded";
          state.article = action.payload;
        }
      )
      .addCase(
        getArticleAsync.rejected,
        (state, action: PayloadAction<string>) => {
          state.loading = "failed";
          state.error = action.payload;
        }
      );
  },
});

export const selectArticles = (state: RootState) => state.articles.articles;
export const selectArticle = (state: RootState) => state.articles.article;

export default articlesSlice.reducer;
