import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

export interface FetchResponse<T> {
	count: number
	lastKeyId?: string
	results: T[]
}

const rawgApiClient = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: import.meta.env.VITE_RAWG_API_KEY,
	}
})

export const gameHubApiClient = axios.create({
	baseURL: import.meta.env.VITE_GAME_HUB_API_URL,
})

export class ApiClient<T> {
	constructor(private readonly endpoint: string, private readonly apiClient: AxiosInstance = rawgApiClient) {
	}

	getAll = async (queryParams: AxiosRequestConfig = {}) => {
		const response = await this.apiClient
			.get<FetchResponse<T>>(this.endpoint, {...queryParams})
		return response.data
	}

	getBySlug = async (id: number | string) => {
		const response = await this.apiClient
			.get<T>(`${this.endpoint}/${id}`)
		return response.data
	}
}
