import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useGameStore } from "../stores/game-store"

export function SearchInput() {
	const ref = useRef<HTMLInputElement | null>(null)
	const setSearchText = useGameStore(s => s.setSearchText)

  return (
		<form onSubmit={(event) => {
			event.preventDefault()
			if (ref.current) {
				setSearchText(ref.current.value)
			}
		}}>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input ref={ref} borderRadius={20} placeholder="Search games..." variant='filled' />
			</InputGroup>
		</form>
  )
}
