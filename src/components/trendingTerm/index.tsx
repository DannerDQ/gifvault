import styles from "./styles.module.css"
import Link from "next/link"
import { memo } from "react"

// Búsqueda popular 👀
function TrendingTerm({
  text,
  bg_color,
}: {
  text: string;
  bg_color: string;
}) {
  return (
    <li style={{ backgroundColor: bg_color }} className={styles.trending_term}>
      <Link href={`/search/${text}`}>
        <h3>{text}</h3>
      </Link>
    </li>
  );
}

export default memo(TrendingTerm, (prev, curr) => prev.text == curr.text)