import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import { FC } from 'react'

type MainLayoutProps = {
  children: any
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