"use client";

import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import styles from "./page.module.css"
import { HotIcon, TrendingIcon } from "@icons";
import TrendingGifs from "@context/trendingGifs";
import TrendingSearchesCarrousel from "@component/TrendingSearchesCarrousel";
import { TrendingSearchesContextProvider } from "@context/trendingSearches";

export default function App() {
  const [mobile, setMobile] = useState(false)
  const [sc, setSc] = useState("");
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
          <h2>Trending Searches - {sc}</h2>
        </div>
        <TrendingSearchesContextProvider>
          <TrendingSearchesCarrousel s = {setSc}/>
        </TrendingSearchesContextProvider>
      </section>
      <section className={styles.trending_gifs_wrapper}>
        <div className={styles.title}>
          <HotIcon />
          <h2>Trending Gifs</h2>
        </div>
        {/* <TrendingGifs /> */}
      </section>
    </>
  );
}
