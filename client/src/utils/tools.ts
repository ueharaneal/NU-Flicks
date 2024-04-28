import cookie from 'react-cookies'
import {toast} from 'react-toastify'
export const getTokenCookie = ()=> cookie.load('x-access-token')
export const removeTokenCookie = () => cookie.remove('x-access-token', {path:'/'})

export const getAuthHeader = () => {
    return{headers:{'Authorization':`Bearer ${getTokenCookie()}` }}  
    
}


export const showToast = (type,msg) => {
    switch(type){
        case 'SUCCESS':
            
        break;
        case "ERROR" : 
        break;
        default: 
            return false
    }
} 