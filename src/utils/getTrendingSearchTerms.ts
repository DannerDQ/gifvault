
const TRENDING_SEARCH_TERMS = process.env.TRENDING_SEARCH_TERMS

// Obtiene las búsquedas más populares
export default function getTrendingSearchTerms(): Promise<string[]> {
	if (!TRENDING_SEARCH_TERMS) return Promise.resolve(new Array<string>());

	return fetch(TRENDING_SEARCH_TERMS)
		.then((res) => res.json())
		.then(({data}: { data: string[] }) => data)
		.catch(() => {
			return new Array<string>()
		})
}
