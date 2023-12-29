"use client"

import styles from "./styles.module.css"
import TrendingSearches from "@component/trendingSearches"
import { trendingSearchesContext } from "@context/trendingSearches"
import { LeftIcon, RightIcon } from "@icons"
import isInRange from "@util/isInRange"
import { Dispatch, MutableRefObject, SetStateAction, useContext, useEffect, useRef, useState } from "react"

// Carrito para mostrar las búsquedas más populares 🎠
export default function TrendingSearchesCarrousel({
  s,
}: {
  s: Dispatch<SetStateAction<string>>;
}) {
  const { trendingSearches } = useContext(trendingSearchesContext);
  const ref: MutableRefObject<HTMLUListElement | null> = useRef(null);
  const [hideLeft, setHideLeft] = useState(true);
  const [hideRight, setHideRight] = useState(true);
  const [scrollState, setScrollState] = useState({
    scrollLeft: 0,
    scrollWidth: 0,
	maxScroll: 0,
  });

  const handleScroll = () => {
    if (!ref.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
	const maxScroll = scrollWidth - clientWidth
    setScrollState({ scrollLeft, scrollWidth, maxScroll });
  };

  const handleLeftScroll = () => {
    if (ref.current) {
      const ul = ref.current;
      const max = Math.max(scrollState.scrollLeft - ul.clientWidth, 0);
      ul.scroll(max, 0);
    }
  };

  const handleRightScroll = () => {
    if (ref.current) {
      const ul = ref.current;
      const { scrollLeft, scrollWidth, maxScroll } = scrollState;

      const min = Math.min(
        scrollLeft + ul.clientWidth,
        maxScroll
      );

      ul.scroll(min, 0);
    }
  };

  // Instancia los valores correctos una vez renderizado el componente.
  useEffect(handleScroll, []);

  // Actualiza los estados "hideLeft" y "hideRight" según convenga
  	useEffect(() => {
		const { scrollLeft, scrollWidth, maxScroll } = scrollState;

		if (!scrollWidth || !ref.current) return;

		// Comprueba si el scroll está en el principio
		if (scrollLeft == 0)
		!hideLeft && setHideLeft(true); // Actualiza hideLeft a verdadero
		else hideLeft && setHideLeft(false); // Actualiza hideLeft a false

		// Comprueba si el scroll está en el final
		if (scrollLeft == maxScroll)
		!hideRight && setHideRight(true); // Actualiza hideRight a verdadero
		else hideRight && setHideRight(false); // Actualiza hideRight a false
	
		s(`${scrollLeft} | ${scrollWidth} | ${maxScroll} | ${hideLeft} | ${hideRight} `);
	}, [scrollState, hideLeft, hideRight, s]);

  return (
    <section className={styles.trending_searches_container}>
      <span style={{ width: hideLeft ? 0 : "auto" }} onClick={handleLeftScroll}>
        <LeftIcon />
      </span>
      <TrendingSearches
        reference={ref}
        onScroll={handleScroll}
        trendingSearches={trendingSearches}
      />
      <span
        style={{ width: hideRight ? 0 : "auto" }}
        onClick={handleRightScroll}
      >
        <RightIcon />
      </span>
    </section>
  );
}
