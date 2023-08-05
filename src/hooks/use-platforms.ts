import { useQuery } from "@tanstack/react-query"
import { Platform } from "./use-games"
import { FetchResponse } from "./use-data"
import { apiClient } from "../services/api-client"

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
