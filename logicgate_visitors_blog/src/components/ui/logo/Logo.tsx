import { FC } from "react";

interface ILogoProps {
  className: string;
}

const Logo: FC<ILogoProps> = ({ className }) => {
  return <img className={className} src="./logic_gate.png" />;
};

export default Logo;
