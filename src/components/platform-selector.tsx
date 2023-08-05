import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import { usePlatforms } from "../hooks/use-platforms"
import { Platform } from "../hooks/use-games"
import { Nullable } from "../types/utility-types"

interface Props {
	onPlatformSelect: (platform: Nullable<Platform>) => void
	selectedPlatform: Nullable<Platform>
}

export function PlatformSelector({onPlatformSelect, selectedPlatform}: Props) {
	const {data, error} = usePlatforms()

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
