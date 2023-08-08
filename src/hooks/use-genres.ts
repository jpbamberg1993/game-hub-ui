import { useQuery } from "@tanstack/react-query"
import { genres } from "../data/genres"
import { genresApiClient } from "../services/genres-service"

export function useGenres() {
	return useQuery({
		queryKey: ["genres"],
		queryFn: async () => await genresApiClient.getAll(),
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
		initialData: {count: genres.length, results: genres},
	})
}
