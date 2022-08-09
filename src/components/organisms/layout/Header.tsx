import { FC, useCallback } from "react"
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react"
import { MenuIconButton } from "../../atoms/MenuIconButton"
import { MenuDrawer } from "../../molecules/MenuDrawer"
import { useNavigate } from "react-router-dom"
import { FaRegUserCircle } from "react-icons/all"

export const Header: FC = () => {
	const {isOpen, onOpen, onClose} = useDisclosure()
	const navigate = useNavigate()
	const toHome = useCallback(() => navigate("/home"), [navigate])
	const toUserManagement = useCallback(() => navigate("/home/user-list"), [navigate])
	const toSetting = useCallback(() => navigate("/home/setting"), [navigate])
	const logout = useCallback(() => navigate("/"), [navigate])
	return (
		<>
			<Flex
				as="nav"
				bg="gray.800"
				color="gray.50"
				alignItems="center"
				justifyContent="space-between"
				padding={{base: 5, md: 8}}
			>
				<Flex as="a" alignItems="center" _hover={{cursor: "pointer"}}>
					<FaRegUserCircle />
					<Heading as="h1" ml={2} fontSize={{base: "md", md: "xl"}} onClick={toHome} fontWeight="bold">
						USER MANAGEMENT APP
					</Heading>
				</Flex>
				<Flex display={{base: "none", md: "flex"}}>
					<Box pr={4}>
						<Link onClick={toUserManagement}>USER LIST</Link>
					</Box>
					<Box pr={4}>
					<Link onClick={toSetting}>SETTING</Link>
					</Box>
					<Link onClick={logout}>LOGOUT</Link>
				</Flex>
				<MenuIconButton onOpen={onOpen}/>
			</Flex>
			<MenuDrawer
				isOpen={isOpen}
				onClose={onClose}
				toHome={toHome}
				logout={logout}
				toUserManagement={toUserManagement}
				toSetting={toSetting}
			/>
		</>
	)
}
