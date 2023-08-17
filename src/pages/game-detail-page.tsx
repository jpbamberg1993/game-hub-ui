import { useParams } from "react-router-dom"

export function GameDetailPage() {
	const { id } = useParams()

	return <h1>Detail page for: {id}</h1>
}
