import { useGenres } from "../hooks/use-genres"

export function GenreList() {
	const {data, error, isLoading} = useGenres()

	return (
		<ul>
			{error && <p>{error}</p>}
			{isLoading && <p>Loading...</p>}
			{data.map(genre => (
				<li key={genre.id}>{genre.name}</li>
			))}
		</ul>
	)
}
