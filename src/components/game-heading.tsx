import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery
}

export function GameHeading({ gameQuery }: Props) {
	const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`.trim() 

	return (
		<Heading as="h1" fontSize='5xl'>{heading}</Heading>
	)
}