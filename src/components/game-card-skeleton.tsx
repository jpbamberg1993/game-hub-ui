import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"
import { GameCardContainer } from "./game-card-container"

export function GameCardSkeleton() {
	return (
		<GameCardContainer>
			<Card>
				<Skeleton height="200px" />
				<CardBody>
					<SkeletonText />
				</CardBody>
			</Card>
		</GameCardContainer>
	)
}
