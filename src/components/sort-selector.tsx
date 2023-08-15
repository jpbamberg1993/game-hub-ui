import { BsChevronDown } from "react-icons/bs"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useGameStore } from "../stores/game-store"

export enum SortValue {
	Relevance = "",
	DateAdded = "-added",
	Name = "name",
	ReleaseDate = "-released",
	Popularity = "-metacritic",
	AverageRating = "-rating",
}

export type SortOption = {
	label: string
	value: SortValue
}

export function SortSelector() {
	const options: SortOption[] = [
		{label: "Relevance", value: SortValue.Relevance},
		{label: "Date added", value: SortValue.DateAdded},
		{label: "Name", value: SortValue.Name},
		{label: "Release date", value: SortValue.ReleaseDate},
		{label: "Popularity", value: SortValue.Popularity},
		{label: "Average rating", value: SortValue.AverageRating},
	]

	const ordering = useGameStore(s => s.gameQuery.ordering)
	const setSortOrder = useGameStore(s => s.setSortOrder)
	const selectedSortValue = options.find(o => o.value === ordering)

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by: {selectedSortValue?.label || "Relevance"}
			</MenuButton>
			<MenuList>
				{options.map(option => (
					<MenuItem key={option.value} onClick={() => setSortOrder(option)}>
						{option.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}
