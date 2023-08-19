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
		<NavLink to={`/games/${game.slug}`}>
			<GameCardContainer>
				<Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
				<CardBody>
					<HStack justifyContent="space-between" marginBottom={3}>
						<PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading fontSize="2xl">{game.name}</Heading>
					<Emoji rating={game.rating_top} />
				</CardBody>
			</GameCardContainer>
		</NavLink>
	)
}
