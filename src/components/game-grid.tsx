import { SimpleGrid } from "@chakra-ui/react"
import { useGames } from '../hooks/use-games'
import { GameCard } from "./game-card"
import { GameCardSkeleton } from "./game-card-skeleton"
import { GameQuery } from "../App"

interface Props {
	gameQuery: GameQuery
}

export function GameGrid({gameQuery}: Props) {
	const {data, error, isLoading} = useGames(gameQuery)
	const skeletons = [1, 2, 3, 4, 5, 6]

	return (
		<>
			{error && <p>{error}</p>}
			<SimpleGrid
				columns={{sm: 1, md: 2, lg: 3, xl: 5}}
				spacing={3}>
				{isLoading && skeletons.map(s => <GameCardSkeleton key={s} />)}
				{data.map(game => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	)
}
