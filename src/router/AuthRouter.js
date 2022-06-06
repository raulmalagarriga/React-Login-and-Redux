import React from 'react'
import {  Routes , Route   } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

const Approuter = () => {
 
  return (
    <>
            <Routes>
                <Route path='/login' element={<LoginScreen />}/>
                <Route path='/register' element={<RegisterScreen />}/>
                <Route path='*' element={<LoginScreen />} />
            </Routes>
    </>
  )
}
export default Approuter;