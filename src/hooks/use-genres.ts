import { genres } from "../data/genres"

export interface Genre {
	id: number
	name: string
	imageBackground: string
}

export function useGenres() {
	return {
		data: genres,
		isLoading: false,
		error: null,
	}
}
