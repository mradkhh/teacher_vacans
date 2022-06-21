import About from 'components/Sections/About'
import Categories from 'components/Sections/Categories'
import Hero from 'components/Sections/Hero'
import NewVacancies from 'components/Sections/NewVacancies'
import Loader from 'components/UI/LoaderUI'
import MainLayout from 'layouts/MainLayout'
import { FC, useEffect, useState } from 'react'

const Home: FC = () => {
  const [ loader, setLoader ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  })
 return (
   loader
    ? <Loader/>
    : <MainLayout>
        <Hero/>
        <About/>
        {/* <Categories/> */}
        <NewVacancies/>
      </MainLayout>
 )
}
export default Home