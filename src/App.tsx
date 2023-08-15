import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import { NavBar } from "./components/nav-bar"
import { GameGrid } from "./components/game-grid"
import { GenreList } from "./components/genre-list"
import { PlatformSelector } from "./components/platform-selector"
import { SortSelector } from "./components/sort-selector"
import { GameHeading } from "./components/game-heading"
import { useGameStore } from "./stores/game-store"

function App() {
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
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area="main" paddingX="10px">
				<Box marginBottom={5} marginTop={2}>
					<GameHeading />
				</Box>
				<Flex marginBottom={5}>
					<Box marginRight={2}>
						<PlatformSelector />
					</Box>
					<SortSelector />
				</Flex>
				<GameGrid />
			</GridItem>
		</Grid>
	)
}

export default App
