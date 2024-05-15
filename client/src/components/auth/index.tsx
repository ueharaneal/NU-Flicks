//improved flow
import PreventSignIn from "../hoc/PreventSignIn.tsx"
import { useState, useEffect } from "react"
import Login from "./Login.tsx"
import Register from "./Register.tsx"
import { useSelector } from "react-redux"
import { RootState } from "@/store"

type Props = {
	onClick: () => void // Function that doesn't return anything
}
function index() {
	const users = useSelector((state: RootState) => state.users)
	const [isRegistered, setIsRegistered] = useState<boolean>(false)

	const handleRegisterChange = () => {
		setIsRegistered(!isRegistered)
	}
	return (
		<PreventSignIn users={users}>
			<div className='flex flex-row items-center h-screen justify-center'>
				{isRegistered ? (
					<Register onIsRegisterChange={handleRegisterChange} />
				) : (
					<Login onIsRegisterChange={handleRegisterChange} />
				)}
			</div>
		</PreventSignIn>
	)
}

export default index
