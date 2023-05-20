import { useData } from "./use-data"

export interface Genre {
	id: number
	name: string
}

export function useGenres() {
	return useData<Genre>("/genres")
}
