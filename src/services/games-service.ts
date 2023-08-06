import { Platform } from "../hooks/use-platforms"
import { Genre } from "../hooks/use-genres"
import { ApiClient } from "./api-client"

export interface Game {
	id: number
	name: string
	background_image: string
	parent_platforms: { platform: Platform }[]
	metacritic: number
	genres: Genre[]
	rating_top: number
}

export const gamesApiClient = new ApiClient<Game>("/games")
