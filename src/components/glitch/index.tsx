"use client"

import styles from "./style.module.css"
import Link from "next/link"
import Image from "next/image"
import poweredByGiphy from "@public/powered_by_giphy.gif"
import { useEffect, useReducer } from "react"
import { useRouter } from "next/router"

// Efecto "Glitch" para un texto dado
export default function Glitch({ text = "GIFFY" }) {
	const router = useRouter()

	useEffect(() => {
		const handleLoad = () => {
			console.log("Ya se cargó todo...");
		}

		router.events.on("routeChangeComplete", handleLoad)

		return () => {
			router.events.off("routeChangeComplete", handleLoad)
		}
	})

	return (
		<section>
			<Link href="/">
				<div className={styles.glitch_container}>
					<p className={styles.glitch} data-text={text}>
						<span aria-hidden="true">{text}</span>
						{text}
						<span aria-hidden="true">{text}</span>
					</p>
				</div>
			</Link>
			<br />
			<Link href="https://giphy.com/" target="_blank" style={{ position: "relative", zIndex: 3 }}>
				<Image src={poweredByGiphy} alt="Powered by Giphy"/>
			</Link>
		</section>
	)
}
