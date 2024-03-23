import { HeaderElement, Logo } from "../components";
import styles from "./navbar_layout.module.scss";

const NavbarLayout = () => {
  return (
    <div className={styles.navbar}>
      <Logo className={styles.navbar__logo} />
      <HeaderElement title="Logic gates" level={2} />
    </div>
  );
};

export default NavbarLayout;
