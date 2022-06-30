import VacanciesCard from 'components/Cards/VacanciesCard'
import MainLayout from 'layouts/MainLayout'
import { FC, useEffect, useState } from 'react'
import { dataType } from 'types/dataType'
import Axios from 'utils/axiosconfig'
import { getToken } from 'utils/tokenStorage'
import './styles/Apply.scss'

const Apply: FC = () => {

  const [ data, setData ] = useState<dataType>()
  console.log(data)
  useEffect(() => {
    if (getToken()) {
      Axios.get('applys/')
      .then(data => {
        setData(data)
        console.log(data)
      })
      .catch(err => console.error(err))
    }
  }, [])

 return (
  <MainLayout>
     <section id="apply">
        <div className="wrapper">
          <div className="apply">
            <div className="applyHead">
            <h1>Yuborilgan arizalar</h1>
            <h3>Arizalar soni: {data?.length}</h3>
            </div>
            <div className="applyList">
              {
                data ? data.map((item: any) =>
                    <VacanciesCard
                        price={item?.price}
                        phone={item?.organization?.phone}
                        title={item?.title}
                        location={item?.organization?.region_parent + ' ' + item?.organization?.region_name}
                        view={item?.viewer}
                        jobType="____"
                        createDate='___'
                        candidate='____'
                        company={item?.organization?.name}
                        deadline='____'
                    />
                ) : <></>
              }
            </div>
          </div>
        </div>
      </section>
  </MainLayout>
 )
}
export default Apply