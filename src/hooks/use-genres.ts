import { useQuery } from "@tanstack/react-query"
import { genres } from "../data/genres"
import { genresApiClient } from "../services/genres-service"

export function useGenres() {
	return useQuery({
		queryKey: ["genres"],
		queryFn: async () => await genresApiClient.getAll(),
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
		initialData: genres,
	})
}

export function useGenresLookup(genreId?: number) {
	const {data: genresResponse} = useGenres()
	const genre = genresResponse?.results.find(genre => genre.id === genreId)
	return {genre, genreId}
}
