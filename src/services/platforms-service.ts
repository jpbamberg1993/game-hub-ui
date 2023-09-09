import { ApiClient, gameHubApiClient } from "./api-client"
import { gamesApiClient } from "./games-service"

export interface Platform {
	id: number
	name: string
	slug: string
}

export const platformsApiClient = new ApiClient<Platform>("/platforms/lists/parents", gameHubApiClient)
