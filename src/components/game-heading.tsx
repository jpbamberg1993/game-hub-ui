import { Heading } from "@chakra-ui/react"
import { useGenresLookup } from "../hooks/use-genres"
import { usePlatformsLookup } from "../hooks/use-platforms"
import { useGameStore } from "../stores/game-store"

export function GameHeading() {
	const selectedGenreId = useGameStore(s => s.gameQuery.genreId)
	const {genre} = useGenresLookup(selectedGenreId)

	const selectedPlatformId = useGameStore(s => s.gameQuery.platformId)
	const {platform} = usePlatformsLookup(selectedPlatformId)

	const heading = `${platform?.name || ''} ${genre?.name || ''} Games`.trim()

	return (
		<Heading as="h1" fontSize="5xl">{heading}</Heading>
	)
}
