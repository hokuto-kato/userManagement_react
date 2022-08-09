import { ChangeEvent, FC, useEffect, useState } from "react"
import {
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
} from "@chakra-ui/react"
import { User } from "../../../types/api/user"
import { PrimaryButton } from "../../atoms/PrimayButton"

type Props = {
	isOpen: boolean;
	isAdmin?: boolean;
	onClose: () => void;
	user: User | null;
};

export const UserDetailModal: FC<Props> = (props) => {
	const {isOpen, onClose, isAdmin = false, user} = props
	useEffect(() => {
		setUsername(user?.username ?? "")
		setName(user?.name ?? "")
		setEmail(user?.email ?? "")
		setPhone(user?.phone ?? "")
	}, [user])

	const [username, setUsername] = useState("")
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")

	const changeUserName = (e:ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
	const changeName = (e:ChangeEvent<HTMLInputElement>) => setName(e.target.value)
	const changeEmail = (e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
	const changePhone = (e:ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)

	const updateProfile = () => {
		console.log("updateProfile")
	}
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			autoFocus={false}
			motionPreset="scale"
			isCentered
		>
			<ModalOverlay>
				<ModalContent>
					<ModalHeader fontWeight="bold">USER INFORMATION</ModalHeader>
					<ModalCloseButton/>
					<ModalBody>
						<Stack spacing={4} pb={isAdmin ? 0 : 6}>
							<FormControl>
								<FormLabel fontWeight="bold">name</FormLabel>
								<Input
									type="text"
									value={username}
									placeholder="user name"
									isReadOnly={!isAdmin}
									onChange={changeUserName}
								/>
							</FormControl>
							<FormControl>
								<FormLabel fontWeight="bold">full name</FormLabel>
								<Input
									type="text"
									value={name}
									placeholder="name"
									isReadOnly={!isAdmin}
									onChange={changeName}
								/>
							</FormControl>
							<FormControl>
								<FormLabel fontWeight="bold">mail</FormLabel>
								<Input
									type="text"
									value={email}
									placeholder="mail"
									isReadOnly={!isAdmin}
									onChange={changeEmail}
								/>
							</FormControl>
							<FormControl>
								<FormLabel fontWeight="bold">phone</FormLabel>
								<Input
									type="text"
									value={phone}
									placeholder="phone"
									isReadOnly={!isAdmin}
									onChange={changePhone}
								/>
							</FormControl>
						</Stack>
					</ModalBody>
					{isAdmin && (
						<ModalFooter>
							<PrimaryButton onClick={updateProfile}>update</PrimaryButton>
						</ModalFooter>
					)}
				</ModalContent>
			</ModalOverlay>
		</Modal>
	)
}
