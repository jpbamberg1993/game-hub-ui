import { NavBar } from "../components/nav-bar"
import { Outlet } from "react-router-dom"
import { Box } from "@chakra-ui/react"

export function Layout() {
	return (
		<>
			<NavBar />
			<Box padding={5}>
				<Outlet />
			</Box>
		</>
	)
}
