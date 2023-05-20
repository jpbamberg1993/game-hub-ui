import { CanceledError } from "axios"
import { apiClient, ApiResponse } from "../services/api-client"
import { useEffect, useState } from "react"

interface Genre {
	id: number
	name: string
}

export function useGenres() {
	const [genres, setGenres] = useState<Genre[]>([])
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal

		setIsLoading(true)
		apiClient
			.get<ApiResponse<Genre>>('/genres', {signal})
			.then(response => {
				setGenres(response.data.results)
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

	return {genres, error, isLoading}
}
