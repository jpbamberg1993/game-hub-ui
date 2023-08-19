import { useQuery } from "@tanstack/react-query"
import { gamesApiClient } from "../services/games-service"
import ms from "ms"

export function useGame(slug: string) {
	return useQuery({
		queryKey: ['games', slug],
		queryFn: () => gamesApiClient.getBySlug(slug),
		staleTime: ms("24h"),
	})
}
