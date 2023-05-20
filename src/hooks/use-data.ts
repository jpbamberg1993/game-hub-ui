import { AxiosRequestConfig, CanceledError } from "axios"
import { useEffect, useState } from "react"
import { apiClient } from "../services/api-client"

interface FetchResponse<T> {
	cont: number
	results: T[]
}

export function useData<T>(endpoint: string, requestConfig: AxiosRequestConfig = {}, deps: any[] = []) {
	const [data, setData] = useState<T[]>([])
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal

		setIsLoading(true)
		apiClient
			.get<FetchResponse<T>>(endpoint, {signal, ...requestConfig})
			.then(response => {
				setData(response.data.results)
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
	}, [...deps])

	return {data, error, isLoading}
}
