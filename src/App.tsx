import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, HashRouter } from "react-router-dom"

import { theme } from "./theme/theme"
import { Router } from "./router/Router"

export const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<HashRouter>
				<Router />
			</HashRouter>
		</ChakraProvider>
	)
}
