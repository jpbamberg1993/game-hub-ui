import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import { useGenres } from "../hooks/use-genres"
import { getCroppedImageUrl } from "../services/image-url"
import { Genre } from "../services/genres-service"

interface Props {
	onGenreSelect: (genre: Genre) => void
	selectedGenreId?: number
}

export function GenreList({selectedGenreId, onGenreSelect}: Props) {
	const {data, isLoading, error} = useGenres()

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
									onClick={() => onGenreSelect(genre)}
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
