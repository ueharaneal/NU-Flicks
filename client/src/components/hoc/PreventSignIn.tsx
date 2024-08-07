import { Navigate, useLocation } from "react-router-dom"
import { UserState } from "@/store/reducers/users"

interface PropTypes {
	users: UserState
	children?: React.ReactNode
}

const PreventSignIn: React.FC<PropTypes> = props => {
	let location = useLocation()
	return (
		<>
			{props.users.auth ? (
				<Navigate to='/dashboard/feed' state={{ from: location }} replace />
			) : (
				props.children
			)}
		</>
	)
}

export default PreventSignIn
