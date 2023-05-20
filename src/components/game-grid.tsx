import { useGames } from '../hooks/use-games'
import { SimpleGrid } from "@chakra-ui/react"
import { GameCard } from "./game-card"
import { GameCardSkeleton } from "./game-card-skeleton"

export function GameGrid() {
	const {games, error, isLoading} = useGames()
	const skeletons = [1, 2, 3, 4, 5, 6]

	return (
		<>
			{error && <p>{error}</p>}
			<SimpleGrid
				columns={{sm: 1, md: 2, lg: 3, xl: 5}}
				padding="10px"
				spacing={10}>
				{isLoading && skeletons.map(s => <GameCardSkeleton key={s} />)}
				{games.map(game => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	)
}
