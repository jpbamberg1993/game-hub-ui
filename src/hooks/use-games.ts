import { useData } from "./use-data"
import { Genre } from "./use-genres"
import { GameQuery } from '../App'

export interface Platform {
	id: number
	name: string
	slug: string
}

export interface Game {
	id: number
	name: string
	backgroundImage: string
	platforms: { platform: Platform }[]
	metacritic: number
	genres: Genre[]
	ratingTop: number
}

export function useGames(gameQuery: GameQuery) {
	let axiosRequest = {
		params: {
			genre: gameQuery.genre?.id,
			platform: gameQuery.platform?.id,
			ordering: gameQuery.ordering?.value,
			search: gameQuery.searchText,
		}
	}

	return useData<Game>("/games", axiosRequest, [gameQuery])
}
