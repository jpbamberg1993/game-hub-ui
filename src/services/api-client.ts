import axios from "axios"

export interface ApiResponse<T> {
	count: number
	results: T[]
}

export const apiClient = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: import.meta.env.VITE_RAWG_API_KEY,
	}
})
