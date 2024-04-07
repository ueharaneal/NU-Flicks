import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import { RootState } from '@/store'

interface AuthGuardProps{
    children: React.ReactNode
}

function AuthGuard(props:AuthGuardProps) {
    const users = useSelector((state:RootState)=>state.users)
    let location = useLocation()
  return (
    <div>
      
    </div>
  )
}

export default AuthGuard
