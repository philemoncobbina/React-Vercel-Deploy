import React from 'react'
import DashboardSection from '@/layouts/DashBoard/DashboardSection'
import Navbar from '@/Templates/Navbar'
import DashboardTable from '@/layouts/DashBoard/DashboardTable'

const DashboardPage = () => {
  return (
    <div>
      <Navbar />
      <DashboardSection />
      <DashboardTable />
    </div>
  )
}

export default DashboardPage
