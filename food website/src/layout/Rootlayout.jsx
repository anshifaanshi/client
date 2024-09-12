import React from 'react'
import Header from '../components/Header'

import { Outlet } from 'react-router-dom'
import AdminFooter  from '../pages/admin/AdminFooter'
function Rootlayout() {
  return (
    <div>
        <Header />
        <div>
        <div>sidebar</div>
        <Outlet />
        </div>
        <AdminFooter />
    </div>
  )
}

export default Rootlayout