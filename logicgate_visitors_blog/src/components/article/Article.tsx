import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectArticle,
  getArticleAsync,
} from "../../feature/article/articleSlice";
import DOMPurify from "dompurify";
import { AppDispatch } from "../../app/store";
import { useEffect } from "react";
import { Avatar } from "antd";
import styles from "./article.module.scss";
import IArticle from "../../interfaces/article";
import { formatDate } from "../../utils/formatDate";

const Article = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const article: IArticle = useSelector(selectArticle);

  useEffect(() => {
    dispatch(getArticleAsync(Number(id)));
  }, [dispatch, id]);
  const randUserAvatar = `https://api.dicebear.com/7.x/miniavs/svg?seed=${id}`;
  return (
    <>
      {article && (
        <div className={styles.article_container}>
          <h1>{article.title}</h1>
          <div className={styles.article_container__avatar}>
            <Avatar src={randUserAvatar} />
            {/* <p>{`Created: ${formatDate(new Date(article?.dateCreated))}`}</p> */}
          </div>
          <img
            style={{
              height: "27rem",
              width: "100%",
            }}
            src={article.photo}
            alt=""
          />
          <div
            className={styles.article_container__html_container}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(article.body),
            }}
          />
        </div>
      )}
    </>
  );
};

export default Article;
