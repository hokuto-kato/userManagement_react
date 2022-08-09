import { FC, memo } from "react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { IconButton } from "@chakra-ui/react"

type Props = {
	onOpen: () => void
}

export const MenuIconButton: FC<Props> = memo((props) => {
	const {onOpen} = props
	return (
		<IconButton
			aria-label="toggle menu"
			icon={<HamburgerIcon/>}
			size="small"
			variant="unStyled"
			display={{base: "block", md: "none"}}
			onClick={onOpen}
		/>
	)
})