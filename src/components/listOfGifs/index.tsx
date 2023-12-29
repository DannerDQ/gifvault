"use client"

import styles from "./styles.module.css"
import Gif from "@component/gif"
import { Gif as GifType } from "@types"
import getRandomBgColor from "@util/getRandomBgColor"
import { useEffect, useRef } from "react"
import Masonry from "react-masonry-css"

export default function ListOfGifs({ gifs }: { gifs: GifType[] }) {
	const listOfGifs = useRef(null)
	const generator = getRandomBgColor()

	return (
    <Masonry
      breakpointCols={{
		default: 2,
		230: 1,
		430: 2,
		630: 3,
		830: 4,
		1030: 5,
		1250: 6,
		2560: 8
	  }}
      columnClassName={styles.column}
      className={styles.list_of_gifs}
      ref={listOfGifs}
    >
      {gifs.map((gif) => {
        const bg_color = generator.next().value ?? "rgb(0, 255, 153)";

        return <Gif gif={gif} bg_color={bg_color} key={gif.id} />;
      })}
    </Masonry>
  );
}
