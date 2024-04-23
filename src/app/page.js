import Link from "next/link";
import styles from "./page.module.css";
import { auth } from "@clerk/nextjs/server";

const Home = async () => {
  const { userId } = await auth();
  let href = userId ? "/home" : "/new-user";
  return (
    <main className={styles.main}>
      <h1>Welcome to Kitchen Kollective</h1>
      <Link href={href}>
        <button className={styles.getStarted}>Get Started</button>
      </Link>
    </main>
  );
};

export default Home;
