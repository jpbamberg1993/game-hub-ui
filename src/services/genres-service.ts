import { ApiClient, gameHubApiClient } from "./api-client"

export interface Genre {
	id: number
	name: string
	image_background: string
}

export const genresApiClient = new ApiClient<Genre>("/genres", gameHubApiClient)
