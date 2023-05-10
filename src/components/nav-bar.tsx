import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./color-mode-switch";

export function NavBar() {
	return (
		<HStack justifyContent="space-between" padding="0 10px 0 0">
			<Image src={logo} alt="logo" boxSize="60px" />
			<ColorModeSwitch />
		</HStack>
	)
}
