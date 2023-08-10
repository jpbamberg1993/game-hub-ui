import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import { usePlatforms } from "../hooks/use-platforms"
import { Nullable } from "../types/utility-types"
import { Platform } from "../services/platforms-service"

interface Props {
	onPlatformSelect: (platform: Nullable<Platform>) => void
	selectedPlatformId?: number
}

export function PlatformSelector({onPlatformSelect, selectedPlatformId}: Props) {
	const {data, error} = usePlatforms()
	const selectedPlatform = data?.results.find(platform => platform.id === selectedPlatformId)

	if (error) return null

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				<MenuItem onClick={() => onPlatformSelect(null)}>Select Platform</MenuItem>
				{data?.results.map(platform => (
					<MenuItem value={platform.id} key={platform.id} onClick={() => onPlatformSelect(platform)}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}
