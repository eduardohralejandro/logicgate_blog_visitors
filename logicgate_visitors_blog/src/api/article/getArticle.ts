import apiClient from "../api";
import { IArticle } from "../../interfaces/interfaces";

export const getArticle = async (articleId: number) => {
  return await apiClient<IArticle>(`articles/${articleId}`);
};
