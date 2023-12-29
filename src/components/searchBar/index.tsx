"use client"

import styles from "./styles.module.css"
import { SearchIcon } from "@icons"
import { useRouter } from "next/navigation"
import { FormEvent, MutableRefObject, useEffect, useRef, useState } from "react"

// Barra de búsqueda 🕵️
export default function SearchBar() {
  const router = useRouter()
	const [query, setQuery] = useState("")
	const [disabled, setDisabled] = useState(true)
	const buttonRef:MutableRefObject<null | HTMLButtonElement> = useRef(null)

	function handleSubmit(event: FormEvent) {
		event.preventDefault()

		router.replace(`/search/${query}`);
	}

	useEffect(() => {
		if (buttonRef.current) {
      		buttonRef.current.disabled = disabled;
    	}
	}, [disabled])
 
	return (
    <form
      className={styles.search_container}
      autoComplete="on"
      onSubmit={handleSubmit}
    >
      <input
        role="search"
        className={styles.search_input}
        placeholder="Type something here..."
        required
        spellCheck
        onInput={(e) => {
          const { value } = e.currentTarget;

          setQuery(value);
          if (value.length > 0) setDisabled(false);
          else !disabled && setDisabled(true);
        }}
      />
      <button ref={buttonRef} className={styles.search_button} type="submit" disabled>
        <SearchIcon />
      </button>
    </form>
  );
}
