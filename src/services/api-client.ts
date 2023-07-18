import axios from "axios"

export interface ApiResponse<T> {
	count: number
	results: T[]
}

export const apiClient = axios.create({
	// baseURL: "https://api.rawg.io/api",
	baseURL: "http://localhost:3000",
	params: {
		key: import.meta.env.VITE_RAWG_API_KEY,
	}
})
