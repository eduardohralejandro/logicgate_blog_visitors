import { CSSProperties, FC } from "react";
import { List } from "antd";

interface IListElementProps<T> {
  listDirection: "horizontal" | "vertical";
  size: "default" | "large" | "small";
  pagination?: (page: number) => void;
  pageSize?: number;
  dataSource: T[];
  style?: CSSProperties;
  className?: string;
  renderItem: (item: T, index: number) => React.ReactNode;
}

const ListElement: FC<IListElementProps<T>> = ({
  dataSource,
  renderItem,
  listDirection,
  size,
  style,
  className,
}) => {
  return (
    <List
      className={className}
      itemLayout={listDirection}
      size={size}
      pagination={{
        onChange: (page: number) => {
          console.log(page);
        },
        pageSize: 4,
      }}
      style={style}
      dataSource={dataSource}
      renderItem={renderItem}
    />
  );
};

export default ListElement;
