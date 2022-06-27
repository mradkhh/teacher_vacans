import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import LoaderUI from 'components/UI/LoaderUI'
import { FC, useEffect, useState } from 'react'

type MainLayoutProps = {
  children: any
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [ loader, setLoader ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  })
  return (
    <>
      <Header/>
       { loader ? <LoaderUI/> : '' }
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default MainLayout