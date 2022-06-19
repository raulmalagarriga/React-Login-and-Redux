import React, { useEffect } from 'react'
import { useSelector} from 'react-redux';

export const Sidebar = () => {

    const { name } = useSelector(state => state.auth);
    console.log( name );

    useEffect( () => {
        console.log('username changed');
    } , [name]);

  return (
    <>
        <aside className='journal__sidebar'>
            <div className='journal__sidebar-navbar'>
                <h3 className='journal__name pointer ml-5 mt-5'>
                    <i className="fa-solid fa-user"></i>
                    <span> {name} </span>
                </h3>
            </div>
            <div className='journal__new-entry'>
                <i className='fa-solid fa-plus fa-4x' ></i>
                <p className='mt-5'>Option 1</p>
            </div>
            <div className='journal__new-entry'>
                <i className='fa-solid fa-align-justify fa-4x' ></i>
                <p className='mt-5'>Option 2</p>
            </div>
        </aside>
    </>
  )
}
