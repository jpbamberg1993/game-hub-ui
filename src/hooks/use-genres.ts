import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../services/api-client"
import { FetchResponse } from "./use-data"
import { genres } from "../data/genres"

export interface Genre {
	id: number
	name: string
	image_background: string
}

export function useGenres() {
	async function fetchGenres() {
		const response = await apiClient
			.get<FetchResponse<Genre>>("/genres")
		return response.data
	}

	return useQuery({
		queryKey: ["genres"],
		queryFn: fetchGenres,
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
		initialData: { count: genres.length, results: genres },
	})
}
