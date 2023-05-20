import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { NavBar } from "./components/nav-bar";
import { GameGrid } from "./components/game-grid"
import { GenreList } from "./components/genre-list"
import { Genre } from "./hooks/use-genres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

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
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
