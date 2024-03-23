import { FC } from "react";

interface ILogoProps {
  className: string;
}

const Logo: FC<ILogoProps> = ({ className }) => {
  return <img className={className} src="https://svgshare.com/i/14ev.svg" />;
};

export default Logo;
