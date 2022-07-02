import Footer from 'components/Footer'
import Header from 'components/Header'
import { FC } from 'react'

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