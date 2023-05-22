import { BsChevronDown } from "react-icons/bs"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { Nullable } from "../types/utility-types"

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

interface Props {
	selectedSortValue: Nullable<SortOption>
	onSortSelect: (sortValue: Nullable<SortOption>) => void
}

export function SortSelector({ selectedSortValue, onSortSelect }: Props) {
	const options: SortOption[] = [
		{ label: "Relevance", value: SortValue.Relevance },
		{ label: "Date added", value: SortValue.DateAdded },
		{ label: "Name", value: SortValue.Name },
		{ label: "Release date", value: SortValue.ReleaseDate },
		{ label: "Popularity", value: SortValue.Popularity },
		{ label: "Average rating", value: SortValue.AverageRating },
	]

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by: {selectedSortValue?.label || "Relevance"}
			</MenuButton>
			<MenuList>
				{options.map(option => (
					<MenuItem key={option.value} onClick={() => onSortSelect(option)}>
						{option.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}
