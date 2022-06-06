import React from 'react'
import { BrowserRouter , Routes , Route   } from 'react-router-dom';
import { Home } from '../components/Home/Home';
import AuthRouter from './AuthRouter';

const Approuter = () => {
 
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/auth/*' element={<AuthRouter />}/>
                <Route path='/' element={<Home />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
export default Approuter;