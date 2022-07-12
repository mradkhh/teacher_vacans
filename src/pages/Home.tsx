import About from 'components/Sections/About'
import Hero from 'components/Sections/Hero'
import NewVacancies from 'components/Sections/NewVacancies'
import MainLayout from 'layouts/MainLayout'
import {FC, memo} from 'react'

const Home: FC = memo(() => {

 return (
   <MainLayout>
        <Hero/>
        <About/>
        <div className="wrapper">
          <NewVacancies/>
        </div>
      </MainLayout>
 )
})

export default Home