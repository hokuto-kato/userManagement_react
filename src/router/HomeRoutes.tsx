import { Home } from "../components/pages/Home"
import { UserList } from "../components/pages/UserList"
import { Setting } from "../components/pages/Setting"

export const HomeRoutes = [
	{path: "/", element: <Home/>},
	{path: "/user_management", element: <UserList/>},
	{path: "/setting", element: <Setting/>},
]