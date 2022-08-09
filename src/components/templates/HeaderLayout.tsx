import { FC, memo, ReactNode } from "react"
import { Header } from "../organisms/layout/Header"
import { Box, Grid } from "@chakra-ui/react"

type Props = {
	children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
	const {children} = props
	return (
		<>
			<Grid
				minH="100vh"
				templateColumns="1fr"
				templateRows="auto 1fr"
				templateAreas={`"header" "main"`}
				gap={0}
			>
				<Box gridArea="header">
					<Header/>
				</Box>
				<Box gridArea="main">{children}</Box>
			</Grid>
		</>
	)
})
