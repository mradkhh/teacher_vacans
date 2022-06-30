import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import { FC, useEffect, useState } from 'react'

type MainLayoutProps = {
  children: JSX.Element | JSX.Element[]
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {

  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default MainLayout