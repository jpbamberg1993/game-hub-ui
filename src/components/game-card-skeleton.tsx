import { CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"
import { GameCardContainer } from "./game-card-container"

export function GameCardSkeleton() {
	return (
		<GameCardContainer>
			<Skeleton height="200px" />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</GameCardContainer>
	)
}
