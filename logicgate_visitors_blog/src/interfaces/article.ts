import { ProgrammingLanguage, TechTag } from "../enums/enums";

interface IArticle {
  articleId?: number;
  title: string;
  body: string;
  techTag: TechTag;
  photo: string;
  programmingLanguage?: ProgrammingLanguage;
  dateCreated?: Date;
  dateUpdated?: Date;
}

export default IArticle;
