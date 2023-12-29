"use client";

import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import styles from "./page.module.css"
import { HotIcon, TrendingIcon } from "@icons";
import TrendingSearchesCarrousel from "@component/TrendingSearchesCarrousel";
import { TrendingSearchesContextProvider } from "@context/trendingSearches";
import Trending from "@component/trendingGifs";

export default function App() {
  const [mobile, setMobile] = useState(false)
  const isMobile = useMediaQuery({
  query:
    "((max-device-width: 768px) and (max-device-height: 1024px)) or ((max-width: 768px) and (max-height: 1024px))",
  });

  //Necesario porque de lo contrario resulta en un error de hidratación :c
  useEffect(() => {
    setMobile(isMobile)
  }, [isMobile])

  return (
    <>
      <section>
        <div className={styles.title}>
          <TrendingIcon />
          <h2>Trending Searches</h2>
        </div>
        <TrendingSearchesContextProvider>
          <TrendingSearchesCarrousel/>
        </TrendingSearchesContextProvider>
      </section>
      <section className={styles.trending}>
        <div className={styles.title}>
          <HotIcon />
          <h2>Trending Gifs</h2>
        </div>
        <Trending/>
      </section>
    </>
  );
}
