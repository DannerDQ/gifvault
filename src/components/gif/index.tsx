import styles from "./styles.module.css"
import { Gif as gifType } from "@types"
import getRandomBgColor from "@util/getRandomBgColor"
import { memo } from "react"

// Componente para visualizar un gif 
function Gif({ gif }: { gif: gifType }) {
	const { id, srcSet, url, title, width, height } = gif
	const backgroundColor = getRandomBgColor()

	function handleClick() {
		location.href = `/${id}`
	}

	return (
		<div
			style={{ backgroundColor, width, height }}
			className={styles.gif}
			data-id={gif.id}
			onClick={handleClick}
			onKeyDown={() => {}}
		>
			<picture>
				<source type="image/webp" srcSet={srcSet} />
				<img src={url} alt={title} />
			</picture>
		</div>
	)
}

export default memo(Gif, (prev, curr) => {
	return prev.gif.id === curr.gif.id
})
