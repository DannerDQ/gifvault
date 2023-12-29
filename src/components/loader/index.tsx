import styles from "./styles.module.css"

// Espera... 🌀
export default function Loader() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.dot} />
			<div className={styles.dot} />
			<div className={styles.dot} />
			<div className={styles.dot} />
			<div className={styles.dot} />
		</div>
	)
}
