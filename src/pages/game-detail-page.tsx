import { useParams } from "react-router-dom"
import { useGame } from "../hooks/use-game"
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react"
import { ExpandableText } from "../components/expandable-text"
import GameAttributes from "../components/game-attributes"
import { GameTrailer } from "../components/game-trailer"
import { GameScreenshots } from "../components/game-screenshots"

export function GameDetailPage() {
	const {id} = useParams()
	const {data: game, isLoading, error} = useGame(id!)

	if (isLoading) {
		return <Spinner />
	}

	if (error || !game) {
		throw error
	}

	return (
		<SimpleGrid columns={{base: 1, md: 2}} spacing={5} maxWidth='1200px' marginX='auto'>
			<GridItem>
				<Heading>{game.name}</Heading>
				<ExpandableText>
					{game.descriptionRaw}
				</ExpandableText>
				<GameAttributes game={game} />
			</GridItem>
			<GridItem>
				<GameTrailer gameSourceId={game.sourceId} />
				<GameScreenshots gameSourceId={game.sourceId} />
			</GridItem>
		</SimpleGrid>
	)
}
