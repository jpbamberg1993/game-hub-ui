import { useQuery } from "@tanstack/react-query"
import { platformsApiClient } from "../services/platforms-service"

export function usePlatforms() {
	return useQuery({
		queryKey: ["platforms"],
		queryFn: async () => await platformsApiClient.getAll(),
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
	})
}
