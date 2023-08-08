import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { IconType } from "react-icons"
import { Box, BoxProps, HStack, Icon } from "@chakra-ui/react"
import { Platform } from "../services/platforms-service"

interface Props {
	platforms: Platform[]
}

type IconProps = {
	icon: IconType
} & BoxProps

function IconWrapper({icon: Icon, ...props}: IconProps) {
	return (
		<Box {...props}>
			<Icon />
		</Box>
	)
}

export function PlatformIconList({platforms}: Props) {
	const iconMap = new Map<string, IconType>([
		['pc', FaWindows],
		['xbox', FaXbox],
		['playstation', FaPlaystation],
		['nintendo', SiNintendo],
		['mac', FaApple],
		['linux', FaLinux],
		['ios', MdPhoneIphone],
		['android', FaAndroid],
		['web', BsGlobe],
	])

	return (
		<HStack marginY={1}>
			{platforms.map(platform => {
				const IconComponent = iconMap.get(platform.slug)
				return IconComponent ? <IconWrapper icon={IconComponent} key={platform.id} color="gray.500" /> : null
			})}
		</HStack>
	)
}
