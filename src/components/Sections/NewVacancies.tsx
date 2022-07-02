import VacancyCard from 'components/UI/Cards/VacancyCard'
import LoaderUI from 'components/UI/Loader/LoaderUI'
import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'API/services'
import './styles/NewVacancies.scss'


const NewVacancies: FC = () => {
  const [ loading, setLoading ] = useState<boolean>(true)
  const [ data, setData ] = useState<any[]>([])

  const resutData = data.slice(0, 6)
  useEffect(() => {
    window.scrollTo(0, 0)
      try {
        const getNewVacancies = async () => {
          const res = await Axios.get('vacancy/')
          const data = res?.results
          setData(data)
        }
        getNewVacancies()
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
  }, [])

 return (
   <section id="newVacancies">
    { loading ? <LoaderUI/> : null }
       <div className="newVacancies">
         <div className="newVacancies__head flex">
           <h2>ЯНГИ ВАКАНСИЯЛАР</h2>
           <Link to="/vacancies">Барча вакансиялар</Link>
         </div>
         <div className="newVacancies__grid">
            {
              resutData.map(item =>
                  <Link key={item?.id} to={`/vacancy/${item?.id}`} >
                    <VacancyCard
                      {...item}
                    />
                  </Link>
                )
            }
         </div>
       </div>
   </section>
 )
}
export default NewVacancies