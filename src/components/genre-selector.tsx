import { useGenres } from "../hooks/use-genres"
import { useGameStore } from "../stores/game-store"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

export function GenreSelector() {
	const {data, error} = useGenres()
	const setSelectedGenreId = useGameStore(s => s.setGenreId)
	const selectedGenreId = useGameStore(s => s.gameQuery.genreId)
	const selectedGenre = data.results.find(genre => genre.id === selectedGenreId)

	if (error) return null

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />} width="100%" textAlign="left">
				{selectedGenre?.name || "Genres"}
			</MenuButton>
			<MenuList>
				<MenuItem onClick={() => setSelectedGenreId(-1)}>Select Genre</MenuItem>
				{data?.results.map(genre => (
					<MenuItem value={genre.id} key={genre.id} onClick={() => setSelectedGenreId(genre.id)}>
						{genre.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}
