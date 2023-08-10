import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import { useState } from "react"
import { NavBar } from "./components/nav-bar"
import { GameGrid } from "./components/game-grid"
import { GenreList } from "./components/genre-list"
import { PlatformSelector } from "./components/platform-selector"
import { SortOption, SortSelector } from "./components/sort-selector"
import { GameHeading } from "./components/game-heading"
import { Nullable } from "./types/utility-types"

export interface GameQuery {
	genreId?: number
	platformId?: number
	ordering: Nullable<SortOption>
	searchText: string
	pageParam?: number
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`, // 1024px
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr'
			}}
		>
			<GridItem area="nav">
				<NavBar onSearch={searchText => setGameQuery({...gameQuery, searchText})} />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList
						selectedGenreId={gameQuery.genreId}
						onGenreSelect={genre => setGameQuery({...gameQuery, genreId: genre.id})} />
				</GridItem>
			</Show>
			<GridItem area="main" paddingX="10px">
				<Box marginBottom={5} marginTop={2}>
					<GameHeading gameQuery={gameQuery} />
				</Box>
				<Flex marginBottom={5}>
					<Box marginRight={2}>
						<PlatformSelector
							selectedPlatformId={gameQuery.platformId}
							onPlatformSelect={platform => setGameQuery({...gameQuery, platformId: platform?.id})} />
					</Box>
					<SortSelector
						selectedSortValue={gameQuery.ordering}
						onSortSelect={ordering => setGameQuery({...gameQuery, ordering})} />
				</Flex>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	)
}

export default App
