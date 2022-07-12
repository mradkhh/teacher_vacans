import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import {FC, memo, ReactNode} from 'react'

type MainLayoutProps = {
  children: JSX.Element | JSX.Element[] | ReactNode
}

const MainLayout: FC<MainLayoutProps> = memo(({ children }) => {

  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
})

export default MainLayout