import { useCallback, useState } from "react"
import axios from "axios"
import { User } from "../types/api/user"
import { UseMessage } from "./useMessage"

export const UseAllUsers = () => {
	const [loading, setLoading] = useState(false)
	const [users, setUsers] = useState<Array<User>>([])
	const {showMessage} = UseMessage()

	const getUsers = useCallback(() => {
		setLoading(true)
		axios
			.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
				setUsers(res.data)
			})
			.catch(() => {
				showMessage({
					title: "Error",
					status: "error",
				})
			})
			.finally(() => {
				setLoading(false)
			})
	}, [showMessage])
	return {loading, users, getUsers}
}
