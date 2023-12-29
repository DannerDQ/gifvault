"use client"

import ListOfGifs from "@component/listOfGifs"
import Loader from "@component/loader"
import Observer from "@component/observer"
import { trendingGifsContext } from "@context/trendingGifs"
import getGifs from "@util/getGifs"
import withoutRepeat from "@util/withoutRepeat"
import { memo, useContext, useEffect, useState } from "react"
import styles from "./styles.module.css"
import useObserver from "@util/useObserver"

const TRENDING_GIFS = process.env.TRENDING_GIFS

// Muestra los gif's en tendencia 🔥
function Trending() {
	const { gifs = [], offset = 0, setGifs, setOffset } = useContext(trendingGifsContext)
	const { fromRef, isIntersected, root } = useObserver();
	let [prevOffset, setPrevOffset] = useState(-1);

	useEffect(() => {
		if (isIntersected && setOffset) setOffset((prev) => prev + 1);
	}, [isIntersected, setOffset]);

	useEffect(() => {
    	if (offset == prevOffset) return;
		const url = `${TRENDING_GIFS}&&offset=${offset * 35}`

		getGifs(url).then((trendingGifs) => {
			setPrevOffset(offset)
			setGifs?.(withoutRepeat(...gifs, ...trendingGifs))
		})

	}, [offset, gifs, prevOffset, setGifs])

	return gifs.length === 0 ? (
		<Loader />
	) : (
		<div className={styles.trending_gifs_wrapper} ref={root}>
			<ListOfGifs gifs={gifs} />
			<Observer fromRef={fromRef}/>
		</div>
	)
}

export default memo(Trending)