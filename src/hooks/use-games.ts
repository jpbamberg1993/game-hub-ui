import { GameQuery } from '../App'
import { useQuery } from "@tanstack/react-query"
import { FetchResponse } from "../services/api-client"
import { Game, gamesApiClient } from "../services/games-service"

export function useGames(gameQuery: GameQuery) {
	return useQuery<FetchResponse<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: async () => {
			return await gamesApiClient.getAll({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.ordering?.value,
					search: gameQuery.searchText,
				}
			})
		},
	})
}
