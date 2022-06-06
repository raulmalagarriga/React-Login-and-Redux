import React from 'react'

export const Header = () => {
  return (
    <div className="header__header">
      <a href='#C' className="header__header-logo">CompanyLogo</a>
      <div className="header__header-right">
        <a className="header__header-link" href="#contact">User Settings</a>
        <a className="header__header-link-logOut" href="#about">LogOut</a>
      </div>
    </div>
  )
}
