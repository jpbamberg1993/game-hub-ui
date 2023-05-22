import { BsChevronDown } from "react-icons/bs"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"

type SortOption = {
	label: string
	value: string
}

interface Props {
	selectedSortOption: SortOption
}

export function SortSelector() {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Sort
			</MenuButton>
			<MenuList>
				<MenuItem>Relevance</MenuItem>
				<MenuItem>Date added</MenuItem>
				<MenuItem>Name</MenuItem>
				<MenuItem>Release date</MenuItem>
				<MenuItem>Popularity</MenuItem>
				<MenuItem>Average rating</MenuItem>
			</MenuList>
		</Menu>
	)
}
