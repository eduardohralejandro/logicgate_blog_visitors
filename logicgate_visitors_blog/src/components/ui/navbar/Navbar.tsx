import { FC, ReactNode } from "react";
import styles from "./navbar.module.scss";

interface INavbarProps {
  children: ReactNode;
}
const Navbar: FC<INavbarProps> = ({ children }) => {
  return (
    <>
      <nav className={styles.navbar}>{children}</nav>
    </>
  );
};

export default Navbar;
