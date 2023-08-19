import { useScreenshots } from "../hooks/use-screenshots"
import { Image, SimpleGrid } from "@chakra-ui/react"

interface Props {
	gameId: number
}

export function GameScreenshots({gameId}: Props) {
	const {data: screenshots, error, isLoading} = useScreenshots(gameId)

	if (error) throw error

	if (isLoading) return null

	return (
		<SimpleGrid columns={{md: 2}} spacing={2} marginY={5}>
			{screenshots?.results.map(ss =>
				<Image key={ss.id} src={ss.image} />)}
		</SimpleGrid>
	)
}
