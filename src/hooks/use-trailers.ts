import { useQuery } from "@tanstack/react-query"
import { Trailer } from "../services/games-service"
import { ApiClient } from "../services/api-client"

export function useTrailers(gameId: number) {
	const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`)
	return useQuery({
		queryKey: ["trailers", gameId],
		queryFn: () => apiClient.getAll(),
	})
}
