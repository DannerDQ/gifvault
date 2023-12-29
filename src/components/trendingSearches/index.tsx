"use client"

import styles from "./styles.module.css"
import TrendingTerm from "@component/trendingTerm"
import getRandomBgColor from "@util/getRandomBgColor";
import { MutableRefObject, UIEventHandler, memo } from "react"

// Muestra las búsquedas más populares 🔍🔥
function TrendingSearches({
  trendingSearches,
  reference,
  onScroll,
}: {
  trendingSearches: Array<string>;
  reference: MutableRefObject<HTMLUListElement | null>;
  onScroll: UIEventHandler;
}) {
  const generator = getRandomBgColor(true)

  return (
    <ul
      onScroll={onScroll}
      ref={reference}
      className={styles.trending_searches}
    >
      {trendingSearches.map((searchTerm) => {
        const bg_color = generator.next().value ?? "rgb(0, 255, 153)"

        return <TrendingTerm text={searchTerm} bg_color={bg_color} key={crypto.randomUUID()} />;
      })}
    </ul>
  );
}

export default memo(TrendingSearches, (prev, curr) => {
	return prev.trendingSearches === curr.trendingSearches
})
