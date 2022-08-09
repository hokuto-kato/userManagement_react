import { FC, memo } from "react"
import { HeaderLayout } from "../templates/HeaderLayout"
import { Center, Heading } from "@chakra-ui/react"

export const Home: FC = memo(() => {
	return (
		<>
			<HeaderLayout>
				<Center h="full">
					<Heading color="gray.900">HOME PAGE</Heading>
				</Center>
			</HeaderLayout>
		</>
	)
})