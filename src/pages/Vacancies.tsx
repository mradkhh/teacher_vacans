import { useEffect } from 'react'
import { Pagination } from 'antd';
import VacanciesCard from 'components/Cards/VacanciesCard'
import MainLayout from 'layouts/MainLayout'
import 'styles/pages/Vacancies.scss'
import axios, { AxiosError, AxiosResponse } from 'axios';
import Requests from 'utils/axiosconfig';


const Vacancies = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    Requests.get()
      .then((data) => {
        console.log(data)
      })
      .catch(err => console.error(err))
  }, [])


 return (
   <MainLayout>
     <section id="vacancies">
       <div className="wrapper">
        <h2 className="vacancies__title">ВАКАНСИЯЛАР СОНИ: 2387</h2>
         <div className="vacancies flex">
           <div className="vacanciesCategory">
             <h1>cate</h1>
           </div>
           <div
              className="vacanciesItems">
                   <VacanciesCard
                    title='Бош мутахассис'
                    price='2 600 348.00'
                    jobType='Тўлиқ'
                    location='Сирдарё вилояти, Ховос тумани'
                    phone='67-364-65-34'
                    createDate='17 июн 2022'
                    deadline='26 июн 2022'
                    company='Ховос туман ҳокимияти'
                    view='15'
                    candidate='146'
                  />
                   <VacanciesCard
                    title='Бош мутахассис'
                    price='2 600 348.00'
                    jobType='Тўлиқ'
                    location='Сирдарё вилояти, Ховос тумани'
                    phone='67-364-65-34'
                    createDate='17 июн 2022'
                    deadline='26 июн 2022'
                    company='Ховос туман ҳокимияти'
                    view='15'
                    candidate='146'
                  />
                   <VacanciesCard
                    title='Бош мутахассис'
                    price='2 600 348.00'
                    jobType='Тўлиқ'
                    location='Сирдарё вилояти, Ховос тумани'
                    phone='67-364-65-34'
                    createDate='17 июн 2022'
                    deadline='26 июн 2022'
                    company='Ховос туман ҳокимияти'
                    view='15'
                    candidate='146'
                  />
                   <VacanciesCard
                    title='Бош мутахассис'
                    price='2 600 348.00'
                    jobType='Тўлиқ'
                    location='Сирдарё вилояти, Ховос тумани'
                    phone='67-364-65-34'
                    createDate='17 июн 2022'
                    deadline='26 июн 2022'
                    company='Ховос туман ҳокимияти'
                    view='15'
                    candidate='146'
                  />
                   <VacanciesCard
                    title='Бош мутахассис'
                    price='2 600 348.00'
                    jobType='Тўлиқ'
                    location='Сирдарё вилояти, Ховос тумани'
                    phone='67-364-65-34'
                    createDate='17 июн 2022'
                    deadline='26 июн 2022'
                    company='Ховос туман ҳокимияти'
                    view='15'
                    candidate='146'
                  />
                   <VacanciesCard
                    title='Бош мутахассис'
                    price='2 600 348.00'
                    jobType='Тўлиқ'
                    location='Сирдарё вилояти, Ховос тумани'
                    phone='67-364-65-34'
                    createDate='17 июн 2022'
                    deadline='26 июн 2022'
                    company='Ховос туман ҳокимияти'
                    view='15'
                    candidate='146'
                  />
                   <VacanciesCard
                    title='Бош мутахассис'
                    price='2 600 348.00'
                    jobType='Тўлиқ'
                    location='Сирдарё вилояти, Ховос тумани'
                    phone='67-364-65-34'
                    createDate='17 июн 2022'
                    deadline='26 июн 2022'
                    company='Ховос туман ҳокимияти'
                    view='15'
                    candidate='146'
                  />
                   <VacanciesCard
                    title='Бош мутахассис'
                    price='2 600 348.00'
                    jobType='Тўлиқ'
                    location='Сирдарё вилояти, Ховос тумани'
                    phone='67-364-65-34'
                    createDate='17 июн 2022'
                    deadline='26 июн 2022'
                    company='Ховос туман ҳокимияти'
                    view='15'
                    candidate='146'
                  />
                   <VacanciesCard
                    title='Бош мутахассис'
                    price='2 600 348.00'
                    jobType='Тўлиқ'
                    location='Сирдарё вилояти, Ховос тумани'
                    phone='67-364-65-34'
                    createDate='17 июн 2022'
                    deadline='26 июн 2022'
                    company='Ховос туман ҳокимияти'
                    view='15'
                    candidate='146'
                  />
                   <VacanciesCard
                    title='Бош мутахассис'
                    price='2 600 348.00'
                    jobType='Тўлиқ'
                    location='Сирдарё вилояти, Ховос тумани'
                    phone='67-364-65-34'
                    createDate='17 июн 2022'
                    deadline='26 июн 2022'
                    company='Ховос туман ҳокимияти'
                    view='15'
                    candidate='146'
                  />
                   <VacanciesCard
                    title='Бош мутахассис'
                    price='2 600 348.00'
                    jobType='Тўлиқ'
                    location='Сирдарё вилояти, Ховос тумани'
                    phone='67-364-65-34'
                    createDate='17 июн 2022'
                    deadline='26 июн 2022'
                    company='Ховос туман ҳокимияти'
                    view='15'
                    candidate='146'
                  />
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