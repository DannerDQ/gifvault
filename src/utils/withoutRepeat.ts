import { Gif } from "@types"

// Elimina los gif's repetidos
export default function withoutRepeat(...gifs: Gif[]) {
	const set = new Set()

	return gifs.filter((gif) => {
		if (set.has(gif.id)) return false

		set.add(gif.id)
		return true
	})
}
