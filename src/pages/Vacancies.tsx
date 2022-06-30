import { useEffect, useState } from 'react'
import { Pagination } from 'antd';
import VacanciesCard from 'components/Cards/VacanciesCard'
import MainLayout from 'layouts/MainLayout'
import './styles/Vacancies.scss'
import Axios from 'utils/axiosconfig';
import { Link } from 'react-router-dom';
import { dataType } from 'types/dataType';


const Vacancies = () => {
  const [ data, setData ] = useState<dataType>()
  console.log(data)
  useEffect(() => {
    window.scrollTo(0, 0)
    Axios.get('vacancy/')
      .then((data) => {
        console.log(data)
        setData(data?.results)
      })
      .catch(err => console.error(err))
  }, [])

 return (
   <MainLayout>
     <section id="vacancies">
       <div className="wrapper">
        <h2 className="vacancies__title">ВАКАНСИЯЛАР СОНИ: { data?.length } </h2>
         <div className="vacancies flex">
           <div className="vacanciesCategory">
             <h1>cate</h1>

           </div>
           <div
              className="vacanciesItems">
                   {
                    data?.map((item: any) =>
                        <Link to={`/vacancy/${item?.id}`}>
                          <VacanciesCard
                              title={item?.title}
                              price={item?.price}
                              jobType='Тўлиқ'
                              location={item?.organization?.region_parent + ' ' + item?.organization?.region_name}
                              phone={item?.organization?.phone}
                              createDate='17 июн 2022'
                              deadline='26 июн 2022'
                              company={item?.organization?.name}
                              view={item?.viewer}
                              candidate='146'
                            />
                        </Link>
                      )
                   }
              <div className="pagination flex">
                   <Pagination defaultCurrent={1} total={50} />
              </div>
           </div>
         </div>
       </div>
     </section>
   </MainLayout>
 )
}
export default Vacancies