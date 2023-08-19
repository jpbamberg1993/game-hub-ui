import React from 'react'
import { SimpleGrid, Text } from "@chakra-ui/react"
import { DefinitionItem } from "./definition-item"
import { CriticScore } from "./critic-score"
import { Game } from "../services/games-service"

interface Props {
	game: Game
}

function GameAttributes({ game }: Props) {
	return (
		<SimpleGrid columns={{sm: 1, md: 2}} as='dl'>
			<DefinitionItem term="Platforms">
				{game.parent_platforms?.map(({platform}) => (
					<Text key={platform.id}>{platform.name}</Text>
				))}
			</DefinitionItem>
			<DefinitionItem term="Metascore">
				<CriticScore score={game.metacritic} />
			</DefinitionItem>
			<DefinitionItem term="Genres">
				{game.genres?.map(({name}) => (
					<Text key={name}>{name}</Text>
				))}
			</DefinitionItem>
			<DefinitionItem term="Publishers">
				{game.publishers?.map(publisher => <Text key={publisher.id}>{publisher.name}</Text>)}
			</DefinitionItem>
		</SimpleGrid>
	)
}

export default GameAttributes
