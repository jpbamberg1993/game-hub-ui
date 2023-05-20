import { useData } from "./use-data"
import { Genre } from "./use-genres"

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
}

export function useGames(selectedGenre: Genre | null) {
	let axiosRequest = {}
	if (selectedGenre) {
		axiosRequest = {
			params: {
				genres: selectedGenre?.id
			}
		}
	}

	return useData<Game>("/games", axiosRequest, [selectedGenre?.id])
}
