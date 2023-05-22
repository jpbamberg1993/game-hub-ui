import { useData } from "./use-data"
import { Platform } from "./use-games"

export function usePlatforms() {
	return useData<Platform>("/platforms")
}
