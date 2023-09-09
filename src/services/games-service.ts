import { ApiClient, gameHubApiClient } from "./api-client"
import { Genre } from "./genres-service"
import { Platform } from "./platforms-service"

interface Publisher {
	id: number
	name: string
}

export interface Game {
	id: string
	sourceId: number
	slug: string
	name: string
	descriptionRaw: string
	backgroundImage: string
	platforms: { platform: Platform }[]
	metacritic: number
	genres: Genre[]
	ratingTop: number
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

export const gamesApiClient = new ApiClient<Game>("/games", gameHubApiClient)
