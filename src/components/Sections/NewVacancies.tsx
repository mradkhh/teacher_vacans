import VacancyCard from 'components/Cards/VacancyCard'
import LoaderUI from 'components/UI/LoaderUI'
import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'utils/axiosconfig'
import './styles/NewVacancies.scss'


const NewVacancies: FC = () => {
  const [ loading, setLoading ] = useState<boolean>(true)
  const [ data, setData ] = useState<any[]>([])

  const resutData = data.slice(0, 3)
  console.log(resutData)
  useEffect(() => {
    window.scrollTo(0, 0)
    Axios.get('vacancy/')
      .then((data) => {
        setData(data?.results)
      })
      .catch(err => console.error(err))
      setLoading(false)
  }, [])

  const handleClick = () => {
    window.location.reload()
  }
 return (
   <section onClick={handleClick} id="newVacancies">
    { loading ? <LoaderUI/> : null }
     <div className="wrapper">
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
     </div>
   </section>
 )
}
export default NewVacancies