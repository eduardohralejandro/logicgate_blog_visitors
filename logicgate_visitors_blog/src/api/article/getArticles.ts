import apiClient from "../api";
import { IArticle } from "../../interfaces/interfaces";

export const getArticles = async () => {
  return await apiClient<IArticle[]>("articles/all");
};
