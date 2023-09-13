import { Game } from "../services/games-service"
import { CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import { PlatformIconList } from "./platform-icon-list"
import { CriticScore } from "./critic-score"
import { getCroppedImageUrl } from "../services/image-url"
import { Emoji } from "./emoji"
import { GameCardContainer } from "./game-card-container"
import { NavLink } from "react-router-dom"

interface Props {
	game: Game;
}

export function GameCard({game}: Props) {
	return (
		<NavLink to={`/games/${game.id}`}>
			<GameCardContainer>
				<Image src={getCroppedImageUrl(game.backgroundImage)} alt={game.name} />
				<CardBody>
					<HStack justifyContent="space-between" marginBottom={3}>
						<PlatformIconList platforms={game.platforms} />
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading fontSize="2xl">{game.name}</Heading>
					<Emoji rating={game.ratingTop} />
				</CardBody>
			</GameCardContainer>
		</NavLink>
	)
}
