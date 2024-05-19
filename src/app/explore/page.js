import Link from "next/link";
import styles from "./Explore.module.css";
import { PlusCircleOutlined } from "@ant-design/icons";
const Explore = () => {
  return (
    <div className={styles.container}>
      <Link href="/newrecipe">
        <button className={styles.shareButton}>
          <PlusCircleOutlined className={styles.icon} />
          Share Your Recipe
        </button>
      </Link>
    </div>
  );
};
export default Explore;
