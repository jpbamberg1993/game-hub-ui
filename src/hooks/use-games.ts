import { useInfiniteQuery } from "@tanstack/react-query"
import { Game, gamesApiClient } from "../services/games-service"
import { FetchResponse } from "../services/api-client"
import ms from "ms"
import { useGameStore } from "../stores/game-store"

export function useGames() {
	const gameQuery = useGameStore(s => s.gameQuery)

	async function getAllGames({pageParam = undefined}): Promise<FetchResponse<Game>> {
		return await gamesApiClient.getAll({
			params: {
				genres: gameQuery.genreId,
				parent_platforms: gameQuery.platformId,
				ordering: gameQuery.ordering,
				search: gameQuery.searchText,
				lastEvaluatedKey: pageParam,
			}
		})
	}

	return useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: getAllGames,
		keepPreviousData: true,
		getNextPageParam: (lastPage: FetchResponse<Game>) => lastPage.lastKeyId,
		staleTime: ms("24h"),
	})
}
