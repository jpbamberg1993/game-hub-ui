import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { Nullable } from "../types/utility-types"

interface Props {
	onSearch: (searchText: string) => void
}

export function SearchInput({ onSearch }: Props) {
	const ref = useRef<HTMLInputElement | null>(null)

  return (
		<form onSubmit={(event) => {
			event.preventDefault()
			if (ref.current) {
				onSearch(ref.current.value);
			}
		}}>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input ref={ref} borderRadius={20} placeholder="Search games..." variant='filled' />
			</InputGroup>
		</form>
  )
}
