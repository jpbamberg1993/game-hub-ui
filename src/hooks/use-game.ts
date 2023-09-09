import { useQuery } from "@tanstack/react-query"
import { gamesApiClient } from "../services/games-service"
import ms from "ms"

export function useGame(id: string) {
	return useQuery({
		queryKey: ['games', id],
		queryFn: () => gamesApiClient.getBySlug(id),
		staleTime: ms("24h"),
	})
}
