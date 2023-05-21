import { Box, Grid, GridItem, Show, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { NavBar } from "./components/nav-bar";
import { GameGrid } from "./components/game-grid"
import { GenreList } from "./components/genre-list"
import { Genre } from "./hooks/use-genres";
import { PlatformSelector } from "./components/platform-selector";
import { Platform } from "./hooks/use-games";
import { Nullable } from "./types/utility-types";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Nullable<Genre>>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Nullable<Platform>>(null)

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
          <GenreList selectedGenre={selectedGenre} onGenreSelect={setSelectedGenre} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box marginBottom={2}>
          <PlatformSelector 
            selectedPlatform={selectedPlatform} 
            onPlatformSelect={setSelectedPlatform} />
        </Box>
        <GameGrid 
          selectedGenre={selectedGenre} 
          selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>
  )
}

export default App
