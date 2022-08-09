import { FC, memo } from "react"
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Stack } from "@chakra-ui/react"
import { PrimaryButton } from "../atoms/PrimayButton"

type Props = {
	isOpen: boolean;
	onClose: () => void;
	toHome: () => void;
	toUserManagement: () => void;
	toSetting: () => void;
	logout: () => void;
}

export const MenuDrawer: FC<Props> = memo((props) => {
	const {isOpen, onClose, toHome, toUserManagement, toSetting, logout} = props
	return (
		<Drawer placement="left" size="xs" isOpen={isOpen} onClose={onClose}>
			<DrawerOverlay>
				<DrawerContent>
					<DrawerBody>
						<Stack spacing={5} pt={3}>
							<PrimaryButton onClick={toHome}>TOP</PrimaryButton>
							<PrimaryButton onClick={toUserManagement}>USER LIST</PrimaryButton>
							<PrimaryButton onClick={toSetting}>SETTING</PrimaryButton>
							<PrimaryButton onClick={logout}>LOGOUT</PrimaryButton>
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	)
})