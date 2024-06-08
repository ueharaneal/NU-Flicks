import { Link, useNavigate, useLocation } from "react-router-dom"
import AuthenticatedMenu from "./AuthenticatedMenu"
import { RootState } from "@/store"
import { useDispatch, useSelector } from "react-redux"
import { setLayout } from "../../store/reducers/site"
import { useEffect } from "react"
import { ClapperboardIcon } from "lucide-react"
//LOGGED OUT HEADER
const Header = () => {
	const users = useSelector((state: RootState) => state.users)
	const dispatch = useDispatch()
	const location = useLocation()
	//This determines which window is going to be opened
	useEffect(() => {
		let pathname = location.pathname.split("/")
		if (pathname[1] == "dashboard") {
			dispatch(setLayout("dash_layout"))
		} else {
			dispatch(setLayout(""))
		}
	}, [location.pathname, dispatch])
	//this determines the notifications in the header
	return (
		<div className='sticky top-0 z-50 flex bg-background flex-row px-10 pb-2 pt-1 w-full items-center justify-between border-b-2 border-border shadow-md'>
			<Link to='/'>
				<div className='text-primary rounded-lg font-semi text-4xl flex py-1 flex-row gap-x-2 items-center'>
					NU FLICKS{" "}
					<ClapperboardIcon className='text-foreground' size={32} />
				</div>
			</Link>
			<AuthenticatedMenu users={users} />
		</div>
	)
}

export default Header
