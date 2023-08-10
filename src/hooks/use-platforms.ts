import { useQuery } from "@tanstack/react-query"
import { platformsApiClient } from "../services/platforms-service"
import { platforms } from "../data/platforms"

export function usePlatforms() {
	return useQuery({
		queryKey: ["platforms"],
		queryFn: async () => await platformsApiClient.getAll(),
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
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
