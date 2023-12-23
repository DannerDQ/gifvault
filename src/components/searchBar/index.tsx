"use client"

import styles from "./styles.module.css"
import { SearchIcon } from "@icons"
import { FormEvent, useState } from "react"

// Barra de búsqueda 🕵️
export default function SearchBar() {
	const [query, setQuery] = useState("")

	function handleSubmit(event: FormEvent) {
		event.preventDefault()

		location.href = `/search/${query}`
	}

	return (
		<form className={styles.search_container} autoComplete="on" onSubmit={handleSubmit}>
			<label className={styles.search_label}>
				<input
					type="search"
					className={styles.search_input}
					placeholder="Type something here..."
					required
					spellCheck
					onInput={(e) => {
						const { value } = e.currentTarget

						setQuery(value)
					}}
				/>
				<button className={styles.search_button} type="submit">
					<SearchIcon />
				</button>
			</label>
		</form>
	)
}
