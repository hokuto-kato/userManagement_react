import { FC } from "react"
import { HeaderLayout } from "../templates/HeaderLayout"
import { Heading, Center } from "@chakra-ui/react"

export const Page404: FC = () => {
	return (
		<>
			<HeaderLayout>
				<Center h="full">
					<Heading color="gray.900">404 not found</Heading>
				</Center>
			</HeaderLayout>
		</>
	)
}