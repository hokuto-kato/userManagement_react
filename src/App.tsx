import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, HashRouter } from "react-router-dom"

import { theme } from "./theme/theme"
import { Router } from "./router/Router"

const base = process.env.NODE_ENV === "development" ? "/" : "/userManagement_react"

export const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<HashRouter basename={base}>
				<Router />
			</HashRouter>
		</ChakraProvider>
	)
}
