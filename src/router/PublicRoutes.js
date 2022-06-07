import React from 'react'
import {  Navigate } from 'react-router-dom';


const PublicRoute = ({isLoggedIn , children }) => {
    return (         
        isLoggedIn === false ? children : <Navigate to='/' /> 
    )
}
export default PublicRoute;