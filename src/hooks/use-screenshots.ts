import { ApiClient } from "../services/api-client"
import { useQuery } from "@tanstack/react-query"

interface Screenshot {
	id: number
	image: string
	hidden: boolean
	width: number
	height: number
}

export function useScreenshots(gameId: number) {
	const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`)
	return useQuery({
		queryKey: ['screenshots', gameId],
		queryFn: apiClient.getAll,
	})
}
