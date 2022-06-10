import React from 'react'
import { Header } from '../UI/Header';
import FormEdit from './FormEdit';

const Settings = () => {
    return ( 
        <>
            <Header />
            <div className='journal__main-content'>
                <main className='UI__main animate__animated animate__fadeIn'>
                    <FormEdit />
                </main>
            </div>
        </>
     );
}
 
export default Settings;