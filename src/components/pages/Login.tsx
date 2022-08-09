import { ChangeEvent, FC, KeyboardEvent, memo, useState } from "react"
import { Box, Grid, Heading, Input, Stack } from "@chakra-ui/react"
import { PrimaryButton } from "../atoms/PrimayButton"
import { useAuth } from "../../hooks/useAuth"

export const Login: FC = memo(() => {
	const {loading, login} = useAuth()
	const [userId, setUserId] = useState("")
	const handleLogin = () => login(userId)
	const changeUserId = (e: ChangeEvent<HTMLInputElement>) => {
		setUserId(e.target.value)
	}
	const submitEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (!userId.match(/\S/g)) return
		if (!e.nativeEvent.isComposing && e.key === "Enter") {
			login(userId)
		}
	}
	const isDisabled = () => {
		if (!userId.match(/\S/g)) return true
	}
	return (
		<Grid placeItems="center" height="100vh" width="100vw" p={{base: 5}}>
			<Box bg="white" w={{base: "full", md: "lg"}} p={5} borderRadius="md" shadow="md">
				<Heading textAlign="center" fontSize={{base: "2xl", md: "3xl"}}>User Management App</Heading>
				<Stack spacing={5} py={5} px={5}>
					<Input
						placeholder="enter user id"
						mt={5}
						value={userId}
						onChange={changeUserId}
						onKeyDown={submitEnter}
					/>
					<PrimaryButton onClick={handleLogin} disabled={isDisabled()} loading={loading}>login</PrimaryButton>
				</Stack>
			</Box>
		</Grid>
	)
})
