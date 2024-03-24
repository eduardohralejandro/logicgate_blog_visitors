import { Link } from "react-router-dom";
import { HeaderElement, Logo } from "../components";
import styles from "./navbar_layout.module.scss";

const NavbarLayout = () => {
  return (
    <div>
      <Link
        className={styles.navbar}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        to={"/"}
      >
        <Logo className={styles.navbar__logo} />
        <HeaderElement title="Logic gates" level={2} />
      </Link>
    </div>
  );
};

export default NavbarLayout;
