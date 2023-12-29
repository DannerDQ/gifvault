import Loader from "@component/loader"
import { MutableRefObject } from "react"

export default function Observer({ fromRef }: { fromRef: MutableRefObject<null> }) {
	return (
		<div ref={fromRef}>
			<Loader />
		</div>
	)
}
