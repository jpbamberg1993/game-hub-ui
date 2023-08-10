import { useQuery } from "@tanstack/react-query"
import { platformsApiClient } from "../services/platforms-service"
import { platforms } from "../data/platforms"
import ms from "ms"

export function usePlatforms() {
	return useQuery({
		queryKey: ["platforms"],
		queryFn: async () => await platformsApiClient.getAll(),
		staleTime: ms("24h"),
		initialData: platforms,
	})
}

export function usePlatformsLookup(platformId?: number) {
	const {data: platformsResponse} = usePlatforms()
	const platform = platformsResponse?.results.find(platform => platform.id === platformId)
	return {
		platform, platformId
	}
}
