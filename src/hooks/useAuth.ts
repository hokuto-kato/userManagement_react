import { useCallback, useState } from "react"
import axios from "axios"
import { User } from "../types/api/user"
import { useNavigate } from "react-router-dom"
import { UseMessage } from "./useMessage"
import { useLoginUser } from "./useLoginUser"

export const useAuth = () => {
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	const {showMessage} = UseMessage()
	const {setLoginUser} = useLoginUser()
	const login = useCallback((id: string) => {
		setLoading(true)
		axios
			.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => {
				if (res.data) {
					const isAdmin = res.data.id === 10
					setLoginUser({...res.data, isAdmin})
					showMessage({
						title: "Login Successful.",
						status: "success",
					})
					navigate("/home")
				} else {
					showMessage({
						title: "Login failed.",
						status: "error",
					})
				}
			})
			.catch(() => {
				showMessage({
					title: "Login failed.",
					status: "error",
				})
			})
			.finally(() => {
				setLoading(false)
			})
	}, [navigate, setLoginUser, showMessage])
	return {login, loading}
}

