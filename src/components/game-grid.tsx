import {useGames, type Game} from '../hooks/use-games'

export function GameGrid() {
	const {games, error} = useGames()

	return (
		<>
			{error && <p>{error}</p>}
			<ul>
				{games.map(game => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	)
}
