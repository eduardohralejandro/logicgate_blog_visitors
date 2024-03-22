import { FC } from "react";
import { Typography } from "antd";
import { HeaderSize } from "../../enums/enums";

const { Title } = Typography;

interface IHeaderElementProps {
  title: string;
  level: HeaderSize;
}

const HeaderElement: FC<IHeaderElementProps> = ({ title, level }) => {
  return (
    <>
      <Title level={level}>{title}</Title>
    </>
  );
};

export default HeaderElement;
