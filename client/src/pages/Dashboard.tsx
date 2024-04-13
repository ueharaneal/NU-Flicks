import React from 'react'
interface DashboardProps {
    isAuthenticated: boolean;
  }
function Dashboard({isAuthenticated}: DashboardProps) {
    
  return (
    <div>
      {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
    </div>
  )
}

export default Dashboard
