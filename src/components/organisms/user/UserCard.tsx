import { FC } from "react"
import { Box, Flex, Text } from "@chakra-ui/react"

type Props = {
	id: number;
	imageUrl: string;
	userName: string;
	fullName: string;
	onClick: (id: number) => void;
};

export const UserCard: FC<Props> = (props) => {
	const {id, imageUrl, userName, fullName, onClick} = props
	return (
		<Flex
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			w="100%"
			h="100%"
			onClick={() => onClick(id)}
			style={{cursor: "pointer"}}
			_hover={{opacity: 0.8}}
		>
			<Box
				backgroundImage={`url("${imageUrl}")`}
				backgroundSize="cover"
				backgroundPosition="center"
				borderRadius="full"
				h={160}
				w={160}
			/>
			<Text fontSize="lg" fontWeight="bold" color="gray.900" mt={3}>
				{userName}
			</Text>
			<Text fontSize="md" color="gray.500">
				{fullName}
			</Text>
		</Flex>
	)
}
