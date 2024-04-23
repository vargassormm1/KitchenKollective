import styles from "./NavLinks.module.css";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const NavLinks = ({ userId }) => {
  return (
    <ul className={styles.links}>
      <SignedOut>
        <Link href="/sign-in" className={styles.link}>
          Login
        </Link>
        <Link href="/sign-up" className={styles.link}>
          Register
        </Link>
      </SignedOut>
      <SignedIn>
        <Link href="/home" className={styles.link}>
          Home
        </Link>
        <Link href="/profile" className={styles.link}>
          Profile
        </Link>
        <UserButton />
      </SignedIn>
    </ul>
  );
};

export default NavLinks;
