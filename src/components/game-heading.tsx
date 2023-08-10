import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import { useGenres } from "../hooks/use-genres"
import { genres } from "../data/genres"
import { usePlatforms } from "../hooks/use-platforms"

interface Props {
	gameQuery: GameQuery
}

export function GameHeading({gameQuery}: Props) {
	const {data: genresResponse} = useGenres()
	const {data: platformsResponse}  = usePlatforms()
	const genre = genresResponse.results.find(genre => genre.id === gameQuery.genreId)
	const platform = platformsResponse?.results.find(platform => platform.id === gameQuery.platformId)

	const heading = `${platform?.name || ''} ${genre?.name || ''} Games`.trim()

	return (
		<Heading as="h1" fontSize="5xl">{heading}</Heading>
	)
}
