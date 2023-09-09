import { useQuery } from "@tanstack/react-query"
import { Trailer } from "../services/games-service"
import { ApiClient } from "../services/api-client"

export function useTrailers(gameSourceId: number) {
	const apiClient = new ApiClient<Trailer>(`/games/${gameSourceId}/movies`)
	return useQuery({
		queryKey: ["trailers", gameSourceId],
		queryFn: () => apiClient.getAll(),
	})
}
