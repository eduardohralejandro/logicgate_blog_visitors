import { Tag } from "antd";
import { FC } from "react";

interface ITagProps {
  text: string;
}
const TagElement: FC<ITagProps> = ({ text }) => {
  return <Tag>{text}</Tag>;
};

export default TagElement;
