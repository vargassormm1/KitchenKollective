import styles from "./NavLinks.module.css";
import Link from "next/link";

const NavbarLinks = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "Profile",
    path: "/rankings",
  },
];
const NavLinks = () => {
  return (
    <ul className={styles.links}>
      {NavbarLinks.map((link) => {
        return (
          <Link href={link.path} key={link.name} className={styles.link}>
            {link.name}
          </Link>
        );
      })}
    </ul>
  );
};

export default NavLinks;
