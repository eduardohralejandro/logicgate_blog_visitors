import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, List } from "antd";
import {
  getArticlesAsync,
  selectArticles,
} from "../../feature/article/articleSlice";
import { ListElement } from "../components";
import { IArticle } from "../../interfaces/interfaces";

import { AppDispatch } from "../../app/store";
import { formatDate } from "../../utils/formatDate";
import { htmlParser } from "../../utils/htmlParser";
import { truncateString } from "../../utils/truncateString";

import styles from "./articles.module.scss";

const Articles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const articles = useSelector(selectArticles);

  useEffect(() => {
    dispatch(getArticlesAsync());
  }, [dispatch]);

  const renderArticles = (item: IArticle, index: number) => {
    const randUserAvatar = `https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`;
    return (
      <List.Item
        key={item.articleId}
        extra={
          <img
            style={{ height: "7rem", width: "7rem" }}
            src={"./logic_gate.png"}
            alt="photo_article"
          />
        }
      >
        <List.Item.Meta
          className={styles.date}
          avatar={<Avatar src={randUserAvatar} />}
          description={`Created: ${formatDate(new Date(item.dateCreated))}`}
          title={item.title}
        />

        {truncateString(htmlParser(item.body), 200)}
      </List.Item>
    );
  };

  return (
    <ListElement
      dataSource={articles}
      renderItem={renderArticles}
      listDirection="vertical"
      size="large"
      className={styles.list}
    />
  );
};

export default Articles;
