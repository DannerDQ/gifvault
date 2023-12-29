"use client"

import styles from "./styles.module.css"
import Gif from "@component/gif"
import { Gif as GifType } from "@types"
import { useEffect, useRef } from "react"

export default function ListOfGifs({ gifs }: { gifs: GifType[] }) {
	const listOfGifs = useRef(null)


	return (
		<ul className={styles.list_of_gifs} ref={listOfGifs}>
			{gifs.map((gif) => {
				return (
					<li key={gif.id}>
						<Gif gif={gif} />
					</li>
				)
			})}
		</ul>
	)
}
