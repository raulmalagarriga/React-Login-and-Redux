import React from 'react'
import { Header } from '../UI/Header'
import { Sidebar } from '../UI/Sidebar'
export const Home = () => {
  return (
    <>
      <Header />
      <div className='journal__main-content animate__animated animate__fadeIn'>
        <Sidebar />
        <main className='UI__main'>
          <h1 className='dashborad-h1'>Dashboard - content app here</h1>
          {/* content */}
        </main>
      </div>
    </>
  )
}
