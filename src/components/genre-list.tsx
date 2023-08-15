import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import { useGenres } from "../hooks/use-genres"
import { getCroppedImageUrl } from "../services/image-url"
import { useGameStore } from "../stores/game-store"

export function GenreList() {
	const {data, isLoading, error} = useGenres()
	const selectedGenreId = useGameStore(s => s.gameQuery.genreId)
	const setSelectedGenreId = useGameStore(s => s.setGenreId)

	if (error) return null

	if (isLoading) return <Spinner />

	return (
		<>
			<Heading fontSize="2xl" marginBottom={3} marginTop={1}>
				Genres
			</Heading>
			<List>
				{data?.results.map(genre => {
					const isSelected = selectedGenreId === genre.id

					return (
						<ListItem
							key={genre.id}
							paddingY="5px">
							<HStack>
								<Image
									src={getCroppedImageUrl(genre.image_background)}
									alt={genre.name}
									boxSize="32px"
									borderRadius={8}
									objectFit="cover" />
								<Button
									onClick={() => setSelectedGenreId(genre.id)}
									fontWeight={isSelected ? 'bold' : 'normal'}
									fontSize="lg"
									whiteSpace="normal"
									textAlign="left"
									variant="link">
									{genre.name}
								</Button>
							</HStack>
						</ListItem>
					)
				})}
			</List>
		</>
	)
}
