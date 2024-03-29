import axios, { AxiosRequestConfig } from "axios"

export interface FetchResponse<T> {
	count: number
	next?: string | null
	results: T[]
}

const apiClient = axios.create({
	baseURL: "https://api.rawg.io/api",
	// baseURL: "http://localhost:3000",
	params: {
		key: import.meta.env.VITE_RAWG_API_KEY,
	}
})

export class ApiClient<T> {
	constructor(private readonly endpoint: string) {
	}

	getAll = async (queryParams: AxiosRequestConfig = {}) => {
		const response = await apiClient
			.get<FetchResponse<T>>(this.endpoint, {...queryParams})
		return response.data
	}

	getBySlug = async (id: number | string) => {
		const response = await apiClient
			.get<T>(`${this.endpoint}/${id}`)
		return response.data
	}
}
