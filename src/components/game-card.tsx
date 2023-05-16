import { Game } from "../hooks/use-games"
import { Card, CardBody, Heading, Image } from "@chakra-ui/react"

interface Props {
	game: Game;
}

export function GameCard({ game }: Props) {
	return (
		<Card borderRadius={10} overflow="hidden">
			<Image src={game.background_image} alt={game.name} />
			<CardBody>
				<Heading fontSize="2xl">{game.name}</Heading>
			</CardBody>
		</Card>
	)
}
