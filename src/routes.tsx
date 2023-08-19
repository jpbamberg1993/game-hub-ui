import { createBrowserRouter } from "react-router-dom"
import { GamesGridPage } from "./pages/games-grid-page"
import { GameDetailPage } from "./pages/game-detail-page"
import { Layout } from "./pages/layout"
import { ErrorPage } from "./pages/error-page"

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <GamesGridPage />,
			},
			{
				path: 'games/:slug',
				element: <GameDetailPage />,
			},
		],
	},
])
