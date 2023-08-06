import { useQuery } from "@tanstack/react-query"
import { apiClient, FetchResponse } from "../services/api-client"

export interface Platform {
	id: number
	name: string
	slug: string
}

export function usePlatforms() {
	return useQuery({
		queryKey: ["platforms"],
		queryFn: async () => {
			const response = await apiClient
				.get<FetchResponse<Platform>>("/platforms/lists/parents")
			return response.data
		},
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
	})
}
