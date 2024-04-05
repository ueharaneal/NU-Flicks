import { useFormik } from 'formik'
import * from 'yup'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '@/store'
function Auth() {


    const [register, setRegister] = useState<boolean>(false)
    let navigate = useNavigate();
    //reducx 
    const users = useSelector((state:RootState)=>state.users.data.id)
    const notifications = useSelector((state:RootState)=>state.notifications)
    const dispatch = useDispatch();

    const formik - 
    

  return <div> Auth </div>;
}

export default Auth;
