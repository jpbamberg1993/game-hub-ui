import { useTrailers } from "../hooks/use-trailers"

interface Props {
	gameSourceId: number
}

export function GameTrailer({gameSourceId}: Props) {
	const {data: trailers, error, isLoading} = useTrailers(gameSourceId)

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
