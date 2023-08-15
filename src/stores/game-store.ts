import { create } from "zustand"
import { mountStoreDevtool } from "simple-zustand-devtools"
import { SortOption } from "../components/sort-selector"

interface GameQuery {
	genreId?: number
	platformId?: number
	ordering?: string
	searchText: string
	pageParam?: number
}

interface GameStore {
	gameQuery: GameQuery
	setSearchText: (searchText: string) => void
	setGenreId: (genreId: number) => void
	setPlatformId: (platformId: number | undefined) => void
	setSortOrder: (sortOrder: SortOption) => void
}

export const useGameStore = create<GameStore>(set => ({
	gameQuery: {
		searchText: '',
	},
	setSearchText: (searchText) => set(() => ({gameQuery: {searchText}})),
	setGenreId: (genreId) => set(store => ({gameQuery: {...store.gameQuery, genreId}})),
	setPlatformId: (platformId) => set(store => ({gameQuery: {...store.gameQuery, platformId}})),
	setSortOrder: (sortOrder) => set(store => ({gameQuery: {...store.gameQuery, ordering: sortOrder.value}})),
}))

if (process.env.NODE_ENV === 'development') {
	mountStoreDevtool('Games Store', useGameStore)
}
