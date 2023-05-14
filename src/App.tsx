import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "./components/nav-bar";
import { GameGrid } from "./components/game-grid"

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "main aside"`, // 1024px
    }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
