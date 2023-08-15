import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import { usePlatforms, usePlatformsLookup } from "../hooks/use-platforms"
import { useGameStore } from "../stores/game-store"

export function PlatformSelector() {
	const {data, error} = usePlatforms()
	const setSelectedPlatformId = useGameStore(s => s.setPlatformId)
	const platformId = useGameStore(s => s.gameQuery.platformId)
	const {platform} = usePlatformsLookup(platformId)

	if (error) return null

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{platform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				<MenuItem onClick={() => setSelectedPlatformId(undefined)}>Select Platform</MenuItem>
				{data?.results.map(platform => (
					<MenuItem value={platform.id} key={platform.id} onClick={() => setSelectedPlatformId(platform.id)}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}
