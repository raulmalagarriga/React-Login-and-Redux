import React from 'react'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startLogOut } from '../../actions/auth';

export const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
      dispatch(startLogOut());
  }
  const handleSettings = () => {
    navigate('/userSettings');
  }
  const handleHome = () => {
    navigate('/');
  }

  return (
    <div className="header__header animate__animated animate__fadeIn">
      <button  className="header__header-link" onClick={handleHome}>Home</button>
      <div className="header__header-right">
        <button className="header__header-link" onClick={handleSettings}>User Settings</button>
        <button className="header__header-link-logOut" onClick={handleLogOut}>LogOut</button>
      </div>
    </div>
  )
}
