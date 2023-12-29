"use client"

import ListOfGifs from "@component/listOfGifs"
import Loader from "@component/loader"
import Observer from "@component/observer"
import { trendingGifsContext } from "@context/trendingGifs"
import getGifs from "@util/getGifs"
import withoutRepeat from "@util/withoutRepeat"
import { useContext, useEffect } from "react"
import styles from "./styles.module.css"
import useObserver from "@util/useObserver"

const TRENDING_GIFS = process.env.TRENDING_GIFS

// Muestra los gif's en tendencia 🔥
export default function Trending() {
	const { gifs = [], offset = 0, setGifs, setOffset } = useContext(trendingGifsContext)
	const { fromRef, isIntersected, root } = useObserver();

	useEffect(() => {
		if (isIntersected && setOffset) setOffset((prev) => prev + 1);
	}, [isIntersected, setOffset]);

	useEffect(() => {
		const url = `${TRENDING_GIFS}&&offset=${offset * 35}`

		getGifs(url).then((trendingGifs) => {
			setGifs?.(withoutRepeat(...gifs, ...trendingGifs))
		})
	}, [offset, gifs, setGifs])

	return gifs.length === 0 ? (
		<Loader />
	) : (
		<div className={styles.trending_gifs_wrapper} ref={root}>
			<ListOfGifs gifs={gifs} />
			<Observer fromRef={fromRef}/>
		</div>
	)
}
