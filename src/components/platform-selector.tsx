import { ChangeEvent } from "react";
import { Select } from "@chakra-ui/react";
import { usePlatforms } from "../hooks/use-platforms";
import { Platform } from "../hooks/use-games";
import { Nullable } from "../types/utility-types";

interface Props {
  onPlatformSelect: (platform: Platform | null) => void
  selectedPlatform: Nullable<Platform>
}

export function PlatformSelector({ onPlatformSelect, selectedPlatform }: Props) {
  const {data} = usePlatforms()

  function handlePlatformSelect(event: ChangeEvent<HTMLSelectElement>) {
    const value = parseInt(event.target.value)
    if (value) {
      const platform = data.find(p => p.id === value)
      onPlatformSelect(platform!)
    } else {
      onPlatformSelect(null)
    }
  }

  return (
    <Select 
      placeholder="Select platform"
      onChange={handlePlatformSelect} 
      value={selectedPlatform?.id}
      width="200px"
      justifySelf="start">
      {data.map(platform => (
        <option value={platform.id} key={platform.id}>
          {platform.name}
        </option>
      ))}
    </Select>
  )
}