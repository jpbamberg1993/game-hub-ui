import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import { useState } from "react"
import { NavBar } from "./components/nav-bar"
import { GameGrid } from "./components/game-grid"
import { GenreList } from "./components/genre-list"
import { Genre } from "./hooks/use-genres"
import { PlatformSelector } from "./components/platform-selector"
import { Platform } from "./hooks/use-games"
import { Nullable } from "./types/utility-types"
import { SortSelector, SortOption } from "./components/sort-selector"

export interface GameQuery {
	genre: Nullable<Genre>
	platform: Nullable<Platform>
	ordering: Nullable<SortOption>
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
				lg: '300px 1fr'
			}}
		>
			<GridItem area="nav">
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList
						selectedGenre={gameQuery.genre}
						onGenreSelect={genre => setGameQuery({...gameQuery, genre})} />
				</GridItem>
			</Show>
			<GridItem area="main" paddingX="10px">
				<Flex marginBottom={5}>
					<Box marginRight={2}>
						<PlatformSelector
							selectedPlatform={gameQuery.platform}
							onPlatformSelect={platform => setGameQuery({...gameQuery, platform})} />
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
