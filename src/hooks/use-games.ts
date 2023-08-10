import { GameQuery } from '../App'
import { useInfiniteQuery } from "@tanstack/react-query"
import { Game, gamesApiClient } from "../services/games-service"
import { FetchResponse } from "../services/api-client"

export function useGames(gameQuery: GameQuery) {
	async function getAllGames({pageParam = 1}): Promise<FetchResponse<Game>> {
		return await gamesApiClient.getAll({
			params: {
				genres: gameQuery.genre?.id,
				parent_platforms: gameQuery.platform?.id,
				ordering: gameQuery.ordering?.value,
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
	})
}
