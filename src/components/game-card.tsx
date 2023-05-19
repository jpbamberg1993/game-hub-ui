import { Game } from "../hooks/use-games"
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import { PlatformIconList } from "./platform-icon-list"
import { CriticScore } from "./critic-score"

interface Props {
	game: Game;
}

export function GameCard({game}: Props) {
	return (
		<Card borderRadius={10} overflow="hidden">
			<Image src={game.background_image} alt={game.name} />
			<CardBody>
				<Heading fontSize="2xl">{game.name}</Heading>
				<HStack justifyContent="space-between">
					<PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	)
}
