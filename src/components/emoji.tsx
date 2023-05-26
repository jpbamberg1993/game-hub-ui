import { Image, ImageProps } from '@chakra-ui/react'
import bullsEye from '../assets/bulls-eye.webp'
import meh from '../assets/bulls-eye.webp'
import thumbsUp from '../assets/thumbs-up.webp'

interface Props {
	rating: number
}

interface Image {
	src: string
	alt: string
}

const iconMap = new Map<number, ImageProps>()
iconMap.set(3, { src: meh, alt: 'meh', boxSize: '25px' })
iconMap.set(4, { src: thumbsUp, alt: 'thumbs up', boxSize: '25px' })
iconMap.set(5, { src: bullsEye, alt: 'bully eye', boxSize: '35px' })

export function Emoji({ rating }: Props) {
	if (rating < 3) return null	

	const icon = iconMap.get(rating)

	return <Image {...icon} marginTop={1} />
}