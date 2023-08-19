import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import { ColorModeSwitch } from "./color-mode-switch"
import { SearchInput } from "./search-input"
import { NavLink } from "react-router-dom"

export function NavBar() {
	return (
		<HStack padding="0 10px 0">
			<NavLink to="/">
				<Image src={logo} alt="logo" boxSize="60px" objectFit="cover" />
			</NavLink>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	)
}
