import VacancyCard from 'components/Cards/VacancyCard'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './styles/NewVacancies.scss'


const NewVacancies: FC = () => {
 return (
   <section id="newVacancies">
     <div className="wrapper">
       <div className="newVacancies">
         <div className="newVacancies__head flex">
           <h2>ЯНГИ ВАКАНСИЯЛАР</h2>
           <Link to="/vacancies">Барча вакансиялар</Link>
         </div>
         <div className="newVacancies__grid">
           <Link to="/vacancy-details">
            <VacancyCard
              title='Бош мутахассис'
              location='Ўзбекистон Республикаси, Сирдарё вилояти'
              price='2 019 564.00 UZS'
              company='Миробод туман давлат солиқ инспекцияси'
            />
           </Link>
           <Link to="/vacancy-details">
            <VacancyCard
              title='Бош мутахассис'
              location='Ўзбекистон Республикаси, Сирдарё вилояти'
              price='2 019 564.00 UZS'
              company='Миробод туман давлат солиқ инспекцияси'
            />
           </Link>
           <Link to="/vacancy-details">
            <VacancyCard
              title='Бош мутахассис'
              location='Ўзбекистон Республикаси, Сирдарё вилояти'
              price='2 019 564.00 UZS'
              company='Миробод туман давлат солиқ инспекцияси'
            />
           </Link>
           <Link to="/vacancy-details">
            <VacancyCard
              title='Бош мутахассис'
              location='Ўзбекистон Республикаси, Сирдарё вилояти'
              price='2 019 564.00 UZS'
              company='Миробод туман давлат солиқ инспекцияси'
            />
           </Link>
           <Link to="/vacancy-details">
            <VacancyCard
              title='Бош мутахассис'
              location='Ўзбекистон Республикаси, Сирдарё вилояти'
              price='2 019 564.00 UZS'
              company='Миробод туман давлат солиқ инспекцияси'
            />
           </Link>
           <Link to="/vacancy-details">
            <VacancyCard
              title='Бош мутахассис'
              location='Ўзбекистон Республикаси, Сирдарё вилояти'
              price='2 019 564.00 UZS'
              company='Миробод туман давлат солиқ инспекцияси'
            />
           </Link>

         </div>
       </div>
     </div>
   </section>
 )
}
export default NewVacancies