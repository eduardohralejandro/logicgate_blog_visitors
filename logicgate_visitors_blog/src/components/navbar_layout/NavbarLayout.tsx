import { Logo } from "../components";
import styles from './navbar_layout.module.scss';

const NavbarLayout = () => {
  return (
    <div className={styles.navbar}>
      <Logo className={styles.navbar__logo} />
    </div>
  );
};

export default NavbarLayout;
