import Categories from 'components/Sections/Categories'
import Hero from 'components/Sections/Hero'
import NewVacancies from 'components/Sections/NewVacancies'
import MainLayout from 'layouts/MainLayout'
import { FC } from 'react'


const Home: FC = () => {
 return (
   <MainLayout>
     <Hero/>
     <Categories/>
     <NewVacancies/>
   </MainLayout>
 )
}
export default Home