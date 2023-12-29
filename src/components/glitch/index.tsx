"use client"

import styles from "./style.module.css"
import Link from "next/link"
import Image from "next/image"
import poweredByGiphy from "@public/powered_by_giphy.gif"
import { useEffect, useReducer } from "react"
import { useRouter } from "next/router"

// Efecto "Glitch" para un texto dado
export default function Glitch({ text = "GIF VAULT" }) {
	return (
    <section className={styles.glitch_wrapper}>
      <Link href="/">
        <div className={styles.glitch_container}>
          <p className={styles.glitch} data-text={text}>
            <span aria-hidden="true">{text}</span>
            {text}
            <span aria-hidden="true">{text}</span>
          </p>
        </div>
      </Link>
      <Link
        href="https://giphy.com/"
        target="_blank"
        style={{ position: "relative", zIndex: 3 }}
		    className={styles.giphy}>
        <Image src={poweredByGiphy} alt="Powered by Giphy" className={styles.giphy_img}/>
      </Link>
    </section>
  );
}
