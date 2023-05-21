import { MouseEventHandler } from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatforms } from "../hooks/use-platforms";
import { Platform } from "../hooks/use-games";
import { Nullable } from "../types/utility-types";

interface Props {
  onPlatformSelect: (platform: Nullable<Platform>) => void
  selectedPlatform: Nullable<Platform>
}

export function PlatformSelector({ onPlatformSelect, selectedPlatform }: Props) {
  const {data, error} = usePlatforms()

  function handlePlatformSelect(event: MouseEventHandler) {
    const value = parseInt(event.target.value)
    if (value) {
      const platform = data.find(p => p.id === value)
      onPlatformSelect(platform!)
    } else {
      onPlatformSelect(null)
    }
  }

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onPlatformSelect(null)}>Select Platform</MenuItem>
        {data.map(platform => (
          <MenuItem value={platform.id} key={platform.id} onClick={() => onPlatformSelect(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}