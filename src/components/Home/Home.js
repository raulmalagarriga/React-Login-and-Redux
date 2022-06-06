import React from 'react'
import { Header } from '../UI/Header'
import { Sidebar } from '../UI/Sidebar'
export const Home = () => {
  return (
    <div className='journal__main-content'>
      <Sidebar />
      <main className='UI__main'>
        <Header />
      </main>
    </div>
  )
}
