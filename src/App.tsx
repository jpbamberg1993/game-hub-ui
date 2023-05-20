import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "./components/nav-bar";
import { GameGrid } from "./components/game-grid"
import { GenreList } from "./components/genre-list"

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`, // 1024px
    }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
