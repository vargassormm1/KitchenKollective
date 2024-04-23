import styles from "./Navbar.module.css";
import Link from "next/link";
import NavLinks from "./NavLinks/NavLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <h1 className={styles.logo}>KitchenKollective</h1>
      </Link>
      <NavLinks />
    </div>
  );
};

export default Navbar;
