import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter , Route, Routes   } from 'react-router-dom';
import { login } from '../actions/auth';
import { Home } from '../components/Home/Home';
import Settings from '../components/UserSettings/Settings';
import AuthRouter from './AuthRouter';
import PrivateRoute from './PrivateRoutes';
import PublicRoute from './PublicRoutes';

const Approuter = () => {
 
  const auth = getAuth();
  const dispatch = useDispatch();
  const [ checking , setChecking ] = useState( true );
  const [ isLoggedIn , setIsLoggedIn ] = useState( false );

  useEffect(() => {
    auth.onAuthStateChanged( ( user ) => {
          if( user?.uid ){
              dispatch( login(user.uid , user.displayName) );
              setIsLoggedIn( true );
          }else{
              setIsLoggedIn( false );
          }
          setChecking(false);
      });
  }, [auth , dispatch , setChecking , setIsLoggedIn])
  
  if( checking ){
      return (
          <h1>Wait...</h1>
      )
  }

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/auth/*' element={
                  <PublicRoute isLoggedIn={isLoggedIn}>
                    <AuthRouter />
                  </PublicRoute>
                }/>
                <Route path='/' element={
                  <PrivateRoute isLoggedIn={isLoggedIn}>
                    <Home />
                  </PrivateRoute>
                }/>
                <Route path='/userSettings' element={
                  <PrivateRoute isLoggedIn={isLoggedIn}>
                    <Settings />
                  </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    </>
  )
}
export default Approuter;