import { useEffect, useState } from "react"
import { apiClient } from "../services/api-client"
import { CanceledError } from "axios"

export interface Platform {
	id: number
	name: string
	slug: string
}

export interface Game {
	id: number
	name: string
	background_image: string
	parent_platforms: { platform: Platform }[]
}

interface FetchGamesResponse {
	count: number
	results: Game[]
}

export function useGames() {
	const [games, setGames] = useState<Game[]>([])
	const [error, setError] = useState('')

	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal

		apiClient
			.get<FetchGamesResponse>('/games', {signal})
			.then(response => setGames(response.data.results))
			.catch(error => {
				if (error instanceof CanceledError) return
				setError(error.message)
			})

		return () => controller.abort()
	}, [])

	return {games, error}
}
