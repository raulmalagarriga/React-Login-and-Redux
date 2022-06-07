import React from 'react'
import { Header } from '../UI/Header'
import { Sidebar } from '../UI/Sidebar'
export const Home = () => {
  return (
    <>
      <div className='journal__main-content animate__animated animate__fadeIn'>
        <Sidebar />
        <main className='UI__main'>
        <Header />
          {/* content */}
        </main>
      </div>
    </>
  )
}
