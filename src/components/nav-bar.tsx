import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import { ColorModeSwitch } from "./color-mode-switch"
import { SearchInput } from "./search-input"

interface Props {
	onSearch: (searchText: string) => void
}

export function NavBar({ onSearch }: Props) {
	return (
		<HStack padding="0 10px 0">
			<Image src={logo} alt="logo" boxSize="60px" />
			<SearchInput onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	)
}
