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
	metacritic: number
}

interface FetchGamesResponse {
	count: number
	results: Game[]
}

export function useGames() {
	const [games, setGames] = useState<Game[]>([])
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal

		setIsLoading(true)
		apiClient
			.get<FetchGamesResponse>('/games', {signal})
			.then(response => {
				setGames(response.data.results)
				setIsLoading(false)
			})
			.catch(error => {
				if (error instanceof CanceledError) return
				setError(error.message)
				setIsLoading(false)
			})

		return () => {
			controller.abort()
			setIsLoading(false)
		}
	}, [])

	return {games, error, isLoading}
}
