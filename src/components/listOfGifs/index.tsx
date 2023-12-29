"use client"

import styles from "./styles.module.css"
import Gif from "@component/gif"
import { Gif as GifType } from "@types"
import getRandomBgColor from "@util/getRandomBgColor"
import { useEffect, useRef } from "react"

export default function ListOfGifs({ gifs }: { gifs: GifType[] }) {
	const listOfGifs = useRef(null)
	const generator = getRandomBgColor()

	return (
		<ul className={styles.list_of_gifs} ref={listOfGifs}>
			{gifs.map((gif) => {
				const bg_color = generator.next().value ?? "rgb(0, 255, 153)";
				
				return (
					<li key={gif.id}>
						<Gif gif={gif} bg_color ={bg_color}/>
					</li>
				)
			})}
		</ul>
	)
}
