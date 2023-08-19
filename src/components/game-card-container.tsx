import { ReactNode } from "react"
import { Card } from "@chakra-ui/react"

interface Props {
	children: ReactNode;
}

export function GameCardContainer({children}: Props) {
	return (
		<Card
			borderRadius={10}
			overflow="hidden"
			_hover={{
				shadow: 'md',
				transform: 'scale(1.03)',
				transitionDuration: '0.2s',
			}}
		>
			{children}
		</Card>
	)
}
