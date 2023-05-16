import { useGames } from '../hooks/use-games'
import { SimpleGrid } from "@chakra-ui/react"
import { GameCard } from "./game-card"

export function GameGrid() {
	const {games, error} = useGames()

	return (
		<>
			{error && <p>{error}</p>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				padding="10px"
				spacing={10}>
				{games.map(game => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	)
}
