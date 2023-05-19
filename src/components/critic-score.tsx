import { Badge } from "@chakra-ui/react"

interface Props {
	score: number
}

export function CriticScore({score}: Props) {
	let color = ''
	if (score >= 60) color = 'yellow'
	if (score >= 75) color = 'green'

	return (
		<Badge variant="subtle" colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
			{score}
		</Badge>
	)
}
