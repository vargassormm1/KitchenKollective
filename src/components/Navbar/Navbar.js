import styles from "./Navbar.module.css";
import Link from "next/link";
import NavLinks from "./NavLinks/NavLinks";
import { auth } from "@clerk/nextjs/server";

const Navbar = async () => {
  const { userId } = await auth();

  return (
    <header className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/">
          <h1 className={styles.logo}>KitchenKollective</h1>
        </Link>
        <NavLinks userId={userId} />
      </div>
    </header>
  );
};

export default Navbar;
