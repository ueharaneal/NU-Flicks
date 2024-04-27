import React,{ useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
interface AuthGuardProps extends RouteComponentProps{

}

export default function AuthGuard(ComposedComponent: React.ReactNode,roleCheck=false){
    const AuthenticationCheck = (props) => {
        const [isAuth, setIsAuth ] = useState(false);
        const users = useSelector( state => state.users )


        useEffect(()=>{
            if(!users.auth){
                props.history.push('/')
            } else {
                if(roleCheck && users.data.role === 'user'){
                    props.history.push('/dashboard')
                } else{
                    setIsAuth(true)
                }
            }
        },[props,users])


        if(!isAuth){
            return(
                <div className="">
                    loading
                </div>
            )
        } else{
            return(
                <ComposedComponent {...props}/>
            )
        }
    }
    return AuthenticationCheck;
}