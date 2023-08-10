import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import { useGenresLookup } from "../hooks/use-genres"
import { usePlatforms, usePlatformsLookup } from "../hooks/use-platforms"

interface Props {
	gameQuery: GameQuery
}

export function GameHeading({gameQuery}: Props) {
	const {genre} = useGenresLookup(gameQuery.genreId)
	const {platform} = usePlatformsLookup(gameQuery.platformId)

	const heading = `${platform?.name || ''} ${genre?.name || ''} Games`.trim()

	return (
		<Heading as="h1" fontSize="5xl">{heading}</Heading>
	)
}
