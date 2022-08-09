import { FC, memo, useCallback, useEffect } from "react"
import { HeaderLayout } from "../templates/HeaderLayout"
import {
	Center,
	Spinner,
	useDisclosure,
	Wrap,
	WrapItem,
} from "@chakra-ui/react"
import { UserCard } from "../organisms/user/UserCard"
import { UseAllUsers } from "../../hooks/useAllUsers"
import { UserDetailModal } from "../organisms/user/UserDetailModal"
import { useSelectUser } from "../../hooks/useSelectUser"
import { useLoginUser } from "../../hooks/useLoginUser"

export const UserList: FC = memo(() => {
	const {getUsers, loading, users} = UseAllUsers()
	const {isOpen, onOpen, onClose} = useDisclosure()
	const {selectUser, selectedUser} = useSelectUser()
	const {loginUser} = useLoginUser()
	useEffect(() => getUsers(), [getUsers])
	const showModal = useCallback(
		(id: number) => {
			selectUser({id, onOpen, users})
		},
		[users, onOpen, selectUser]
	)
	return (
		<HeaderLayout>
			{loading ? (
				<Center h="100vh" w="100vw">
					<Spinner/>
				</Center>
			) : (
				<Wrap
					spacing={{base: 4, md: 8}}
					p={{base: 4, md: 8}}
					justify={{base: "center", md: "flex-start"}}
				>
					{users.map((user, index) => {
						return (
							<WrapItem
								key={user.id}
								w={260}
								h={260}
								borderRadius={5}
								shadow="md"
								bg="white"
							>
								<UserCard
									imageUrl={`https://picsum.photos/320/320.webp?random=${index}`}
									userName={user.username}
									fullName={user.name}
									onClick={showModal}
									id={user.id}
								/>
							</WrapItem>
						)
					})}
				</Wrap>
			)}
			<UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} isAdmin={loginUser?.isAdmin}/>
		</HeaderLayout>
	)
})
