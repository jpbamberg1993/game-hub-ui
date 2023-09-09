import { useScreenshots } from "../hooks/use-screenshots"
import { Image, SimpleGrid } from "@chakra-ui/react"

interface Props {
	gameSourceId: number
}

export function GameScreenshots({gameSourceId}: Props) {
	const {data: screenshots, error, isLoading} = useScreenshots(gameSourceId)

	if (error) throw error

	if (isLoading) return null

	return (
		<SimpleGrid columns={{md: 2}} spacing={2} marginY={5}>
			{screenshots?.results.map(ss =>
				<Image key={ss.id} src={ss.image} />)}
		</SimpleGrid>
	)
}
