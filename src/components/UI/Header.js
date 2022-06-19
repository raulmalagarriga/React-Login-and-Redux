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
      <button  className="header__header-link" onClick={handleHome}>
        <i class="fa-solid fa-house-chimney"></i>
      </button>
      <div className="header__header-right">
        <button className="header__header-link" onClick={handleSettings}>
            <i class="fa-solid fa-screwdriver-wrench"></i>
        </button>
        <button className="header__header-link-logOut" onClick={handleLogOut}>
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  )
}
