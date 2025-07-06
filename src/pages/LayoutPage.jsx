import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function LayoutPage() {
  return (
    <div>
      <Header/>
      <main>       
        { <Outlet/> }
      </main>
    </div>
  )
}

export default LayoutPage
