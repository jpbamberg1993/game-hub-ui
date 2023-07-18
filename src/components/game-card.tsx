import { Game } from "../hooks/use-games"
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import { PlatformIconList } from "./platform-icon-list"
import { CriticScore } from "./critic-score"
import { getCroppedImageUrl } from "../services/image-url"
import { GameCardContainer } from "./game-card-container"
import { Emoji } from "./emoji"

interface Props {
	game: Game;
}

export function GameCard({game}: Props) {
	return (
		<GameCardContainer>
			<Card marginBottom={1}>
				<Image src={getCroppedImageUrl(game.backgroundImage)} alt={game.name} />
				<CardBody>
					<HStack justifyContent="space-between" marginBottom={3}>
						<PlatformIconList platforms={game.platforms.map(p => p.platform)} />
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading fontSize="2xl">{game.name}</Heading>
					<Emoji rating={game.ratingTop} />
				</CardBody>
			</Card>
		</GameCardContainer>
	)
}
