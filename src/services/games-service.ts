import { ApiClient } from "./api-client"
import { Genre } from "./genres-service"
import { Platform } from "./platforms-service"

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
