import { Nullable } from "../types/utility-types"
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

function addParameter(params: {}, key: string, value: any) {
	const result = {
		...params,
		[key]: value
	}
	return result
}

export function useGames(selectedGenre: Nullable<Genre>, selectedPlatform: Nullable<Platform>) {
	let axiosRequest = { params: {} }
	if (selectedGenre) {
		axiosRequest.params = addParameter(axiosRequest.params, "genres", selectedGenre?.id)
	}
	if (selectedPlatform) {
		axiosRequest.params = addParameter(axiosRequest.params, "platforms", selectedPlatform?.id)
	}

	return useData<Game>("/games", axiosRequest, [selectedGenre?.id, selectedPlatform?.id])
}
