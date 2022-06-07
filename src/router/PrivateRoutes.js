import React from 'react'
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({isLoggedIn , children }) => {
    return (
        
         isLoggedIn === true ? children : <Navigate to='/auth/login' /> 
        
    )
// For react router v6 we need to use Navigate component
}
export default PrivateRoute;