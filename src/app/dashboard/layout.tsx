import React, { ReactNode } from 'react'
import AsideComponentDashboard from '../components/dsasboard/AsideComponentDashboard'

export default function DashboardLayout({
  children,
  products,
  blogs,
  setting
}:{
  children: ReactNode,
  products: ReactNode,
  blogs: ReactNode,
  setting: ReactNode,
}) {
  return (
    <section className='grid grid-cols-4 gap-5'>
      <AsideComponentDashboard/>
      <section>
        <div className='bg-red-200 p-8'>{children}</div>
        <div className='bg-blue-200 p-8'>{products}</div>
        <div className='bg-yellow-200 p-8'>{blogs}</div>
        <div className='bg-green-200 p-8'>{setting}</div>
      </section>
      {/* {children}
      {products}
      {blogs}
      {setting} */}

    </section>
  )
}
