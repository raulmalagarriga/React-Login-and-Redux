import React from 'react'
import { useSelector} from 'react-redux';

export const Sidebar = () => {

    const { name } = useSelector(state => state.auth);
    console.log( name )

  return (
    <>
        <aside className='journal__sidebar'>
            <div className='journal__sidebar-navbar'>
                <h3 className='mt-5'>
                    <i className="fa-solid fa-user"></i>
                    <span> {name} </span>
                </h3>
            </div>
            <div className='journal__new-entry'>
                <i className='fa-solid fa-plus fa-4x' ></i>
                <p className='mt-5'>Create Activity</p>
            </div>
        </aside>
    </>
  )
}
