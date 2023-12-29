export default function isInRange(
	n: number,
	{ min = 0, max = Infinity }: { min?: number; max?: number } = {}
) {
	return n >= min && n <= max
}
