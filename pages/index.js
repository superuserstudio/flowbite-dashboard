import React from 'react'
import dynamic from 'next/dynamic'

const DashboardComponent = dynamic(() => import('../components/Dashboard'), { ssr: false })

export default function Home() {
  return <DashboardComponent />
}
