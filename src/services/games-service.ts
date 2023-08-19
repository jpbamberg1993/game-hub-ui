import { ApiClient } from "./api-client"
import { Genre } from "./genres-service"
import { Platform } from "./platforms-service"

interface Publisher {
	id: number
	name: string
}

export interface Game {
	id: number
	slug: string
	name: string
	description_raw: string
	background_image: string
	parent_platforms: { platform: Platform }[]
	metacritic: number
	genres: Genre[]
	rating_top: number
	publishers: Publisher[]
}

export interface Trailer {
	id: number
	name: string
	preview: string
	data: {
		480: string
		max: string
	}
}

export const gamesApiClient = new ApiClient<Game>("/games")
