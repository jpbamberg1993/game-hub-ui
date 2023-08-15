import { SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { useGames } from '../hooks/use-games'
import { GameCard } from "./game-card"
import { GameCardSkeleton } from "./game-card-skeleton"
import InfiniteScroll from "react-infinite-scroll-component"

export function GameGrid() {
	const {
		data,
		error,
		isLoading,
		fetchNextPage,
		hasNextPage,
	} = useGames()
	const skeletons = [1, 2, 3, 4, 5, 6]

	if (error) return <Text>{error.message}</Text>

	const fetchedGamesCount = data?.pages.reduce((acc, page) => acc + page.results.length, 0) ?? 0

	return (
		<InfiniteScroll
			next={fetchNextPage}
			hasMore={hasNextPage ?? false}
			loader={<Spinner />}
			dataLength={fetchedGamesCount}>
			<SimpleGrid
				columns={{sm: 1, md: 2, lg: 3, xl: 4}}
				spacing={6}>
				{isLoading && skeletons.map(s => <GameCardSkeleton key={s} />)}
				{data?.pages.map(games => (
					games.results.map(game => <GameCard key={game.id} game={game} />
					)))}
			</SimpleGrid>
		</InfiniteScroll>
	)
}
