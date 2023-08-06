import { Genre } from "./use-genres"
import { GameQuery } from '../App'
import { useQuery } from "@tanstack/react-query"
import { apiClient,FetchResponse } from "../services/api-client"

export interface Platform {
	id: number
	name: string
	slug: string
}

export interface Game {
	id: number
	name: string
	background_image: string
	parent_platforms: { platform: Platform }[]
	metacritic: number
	genres: Genre[]
	rating_top: number
}

export function useGames(gameQuery: GameQuery) {
	return useQuery<FetchResponse<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: async () => {
			let res = await apiClient
				.get<FetchResponse<Game>>("/games", {
					params: {
						genres: gameQuery.genre?.id,
						parent_platforms: gameQuery.platform?.id,
						ordering: gameQuery.ordering?.value,
						search: gameQuery.searchText,
					}
				})
			return res.data
		},
	})
}
