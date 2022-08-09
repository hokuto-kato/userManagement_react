import { FC, memo } from "react"
import { HeaderLayout } from "../templates/HeaderLayout"
import { Center, Heading } from "@chakra-ui/react"

export const Setting: FC = memo(() => {
	return (
		<HeaderLayout>
			<Center h="full">
				<Heading color="gray.900">SETTING PAGE</Heading>
			</Center>
		</HeaderLayout>
	)
})