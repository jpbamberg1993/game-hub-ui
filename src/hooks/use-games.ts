import { useInfiniteQuery } from "@tanstack/react-query"
import { Game, gamesApiClient } from "../services/games-service"
import { FetchResponse } from "../services/api-client"
import ms from "ms"
import { useGameStore } from "../stores/game-store"

export function useGames() {
	const gameQuery = useGameStore(s => s.gameQuery)

	async function getAllGames({pageParam = 1}): Promise<FetchResponse<Game>> {
		return await gamesApiClient.getAll({
			params: {
				genres: gameQuery.genreId,
				parent_platforms: gameQuery.platformId,
				ordering: gameQuery.ordering,
				search: gameQuery.searchText,
				page: pageParam,
			}
		})
	}

	function getNextPageParam(lastPage: FetchResponse<Game>) {
		if (lastPage.next) {
			const url = new URL(lastPage.next)
			const page = url.searchParams.get("page")
			return Number(page)
		} else {
			return undefined
		}
	}

	return useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: getAllGames,
		keepPreviousData: true,
		getNextPageParam,
		staleTime: ms("24h"),
	})
}
