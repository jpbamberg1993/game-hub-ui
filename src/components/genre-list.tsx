import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import { Genre, useGenres } from "../hooks/use-genres"
import { getCroppedImageUrl } from "../services/image-url"

interface Props {
	onGenreSelect: (genre: Genre) => void
}

export function GenreList({ onGenreSelect }: Props) {
	const {data, isLoading, error} = useGenres()

	if (error) return null

	if (isLoading) return <Spinner />

	return (
		<List>
			{data.map(genre => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image 
							src={getCroppedImageUrl(genre.image_background)} 
							alt={genre.name} 
							boxSize='32px' 
							borderRadius={8} />
						<Button onClick={() => onGenreSelect(genre)} fontSize='lg' variant='link'>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	)
}
