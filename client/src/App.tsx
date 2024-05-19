import { useState, useEffect } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./components/theme/theme-provider"
import MainLayout from "./components/hoc/MainLayout"
import { RootState, AppDispatch } from "@/store/index"

import { useSelector, useDispatch } from "react-redux"
import { isAuth } from "./store/actions/users"
import { LargeLoader } from "./components/common/utils"

import Home from "./pages/Home"
import Auth from "./components/auth"
import Header from "./components/navigation/Header"

import DashboardMain from "./components/dashboard/DashboardMain"
import Dashboard from "./pages/Dashboard"
import AuthGuard from "./components/hoc/AuthGuard"
import CreateArticle from "./components/dashboard/articles/Articles"
import Explore from "./components/dashboard/explore/Explore"

function App() {
	const [loading, setLoading] = useState<boolean>(true)
	const dispatch = useDispatch<AppDispatch>()
	const users = useSelector((state: RootState) => state.users)

	useEffect(() => {
		dispatch(isAuth() as any)
	}, [])

	useEffect(() => {
		if (users.auth !== null) {
			setLoading(false)
		}
	}, [users])
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<BrowserRouter>
				{loading ? (
					<LargeLoader />
				) : (
					<>
						<Header />
						<MainLayout>
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='' element={<AuthGuard />}>
									<Route path='/dashboard' element={<Dashboard />}>
										<Route path='feed' element={<DashboardMain />} />
										<Route
											path='profile'
											element={<DashboardMain />}
										/>
										<Route path='explore' element={<Explore />} />
										<Route
											path='articles'
											element={<CreateArticle />}
										/>
									</Route>
									<Route path='/categories' element={<Auth />}></Route>
								</Route>
								<Route path='/auth' element={<Auth />}></Route>
							</Routes>
						</MainLayout>
					</>
				)}
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
