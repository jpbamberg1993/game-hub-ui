import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import { Genre, useGenres } from "../hooks/use-genres"
import { getCroppedImageUrl } from "../services/image-url"
import { Nullable } from "../types/utility-types"

interface Props {
	onGenreSelect: (genre: Genre) => void
	selectedGenre: Nullable<Genre>
}

export function GenreList({ selectedGenre, onGenreSelect }: Props) {
	const {data, isLoading, error} = useGenres()

	if (error) return null

	if (isLoading) return <Spinner />

	return (
		<List>
			{data.map(genre => {
				const isSelected = selectedGenre?.id === genre.id

				return (
					<ListItem 
						key={genre.id} 
						paddingY="5px">
						<HStack>
							<Image 
								src={getCroppedImageUrl(genre.image_background)} 
								alt={genre.name} 
								boxSize='32px' 
								borderRadius={8} />
							<Button 
								onClick={() => onGenreSelect(genre)} 
								fontWeight={isSelected ? 'bold' : 'normal'} 
								fontSize='lg' 
								variant='link'>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				)
			})}
		</List>
	)
}
