import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import { GenreList } from "../components/genre-list"
import { GameHeading } from "../components/game-heading"
import { PlatformSelector } from "../components/platform-selector"
import { SortSelector } from "../components/sort-selector"
import { GameGrid } from "../components/game-grid"
import { GenreSelector } from "../components/genre-selector"

export function GamesGridPage() {
	return (
		<>
			<Grid
				templateAreas={{
					base: `"main"`,
					lg: `"aside main"`, // 1024px
				}}
				templateColumns={{
					base: '1fr',
					lg: '200px 1fr'
				}}
			>
				<Show above="lg">
					<GridItem area="aside" paddingX={5}>
						<GenreList />
					</GridItem>
				</Show>
				<GridItem area="main" paddingX="10px">
					<Box marginBottom={5} marginTop={2}>
						<GameHeading />
					</Box>
					<Show below="lg">
						<Box marginBottom={5} marginTop={2}>
							<GenreSelector />
						</Box>
					</Show>
					<Flex marginBottom={5}>
						<Box marginRight={2}>
							<PlatformSelector />
						</Box>
						<SortSelector />
					</Flex>
					<GameGrid />
				</GridItem>
			</Grid>
		</>
	)
}
