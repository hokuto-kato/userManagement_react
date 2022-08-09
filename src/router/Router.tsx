import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { Login } from "../components/pages/Login"
import { Home } from "../components/pages/Home"
import { UserList } from "../components/pages/UserList"
import { Setting } from "../components/pages/Setting"
import { Page404 } from "../components/pages/Page404"
import { LoginUserProvider } from "../providers/LoginUserProvider"

export const Router: FC = () => {
	return (
		<LoginUserProvider>
			<Routes>
				<Route path={"/"} element={<Login/>}/>
				<Route path={"/home"} element={<Home/>}/>
				<Route path={"/home/user-list"} element={<UserList/>}/>
				<Route path={"/home/setting"} element={<Setting/>}/>
				<Route path={"*"} element={<Page404/>}/>
			</Routes>
		</LoginUserProvider>
	)
}