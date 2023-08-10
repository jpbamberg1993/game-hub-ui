import { useQuery } from "@tanstack/react-query"
import { genres } from "../data/genres"
import { genresApiClient } from "../services/genres-service"
import ms from "ms"

export function useGenres() {
	return useQuery({
		queryKey: ["genres"],
		queryFn: async () => await genresApiClient.getAll(),
		staleTime: ms("24h"),
		initialData: genres,
	})
}

export function useGenresLookup(genreId?: number) {
	const {data: genresResponse} = useGenres()
	const genre = genresResponse?.results.find(genre => genre.id === genreId)
	return {genre, genreId}
}
