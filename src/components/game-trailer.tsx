import { useTrailers } from "../hooks/use-trailers"

interface Props {
	gameId: number
}

export function GameTrailer({gameId}: Props) {
	const {data: trailers, error, isLoading} = useTrailers(gameId)

	if (isLoading) return null

	if (error) throw error

	const trailer = trailers?.results[0]

	if (!trailer) return null

	return (
		<video
			src={trailer.data['480']}
			poster={trailer.preview}
			controls
		/>
	)
}
