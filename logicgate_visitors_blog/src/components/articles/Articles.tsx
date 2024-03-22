import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, List } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  getArticlesAsync,
  selectArticles,
} from "../../feature/article/articleSlice";
import { InputElement, ListElement, TagElement } from "../components";
import { IArticle } from "../../interfaces/interfaces";

import { AppDispatch } from "../../app/store";
import { formatDate } from "../../utils/formatDate";
import { htmlParser } from "../../utils/htmlParser";
import { truncateString } from "../../utils/truncateString";

import styles from "./articles.module.scss";

const Articles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const articles = useSelector(selectArticles);
  const [searchTitle, setSearchTitle] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(event.target.value);
  };

  const filteredData = articles.filter((article: IArticle) =>
    article.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  useEffect(() => {
    dispatch(getArticlesAsync());
  }, [dispatch]);

  const renderArticles = (item: IArticle, index: number) => {
    const randUserAvatar = `https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`;
    return (
      <>
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
          <div className={styles.tags}>
            <TagElement text={item.programmingLanguage} />
            <TagElement text={item.techTag} />
          </div>
        </List.Item>
      </>
    );
  };

  return (
    <div className={styles.list}>
      <InputElement
        size="middle"
        icon={<SearchOutlined />}
        value={searchTitle}
        onChange={handleSearch}
      />
      <ListElement
        dataSource={filteredData}
        renderItem={renderArticles}
        listDirection="vertical"
        size="large"
      />
    </div>
  );
};

export default Articles;
