import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import VacanciesCard from 'components/Cards/VacanciesCard'
import MainLayout from 'layouts/MainLayout'
import NotFound from './NotFound'
import LoaderUI from 'components/UI/LoaderUI'
import { dataType } from 'types/dataType'
import Axios from 'utils/axiosconfig'
import { getToken } from 'utils/tokenStorage'
import './styles/Apply.scss'

const Apply: FC = () => {

  const [ data, setData ] = useState<dataType>()
  const [ loading, setLoading ] = useState<boolean>(true)
  console.log(data)
  useEffect(() => {
    if (getToken()) {
      Axios.get('apply/')
      .then(data => {
        setData(data)
        console.log(data)
      })
      .catch(err => console.error(err))
    }
    setLoading(false)
  }, [])

 return (
  <MainLayout>
     {
      getToken() ? <section id="apply">
        { loading ? <LoaderUI/> : null }
      <div className="wrapper">
        <div className="apply">
          <div className="applyHead">
          <h1>Yuborilgan arizalar</h1>
          <h3>Arizalar soni: {data?.length}</h3>
          </div>
          <div className="applyList">
            {
              data ? data.map((item: any) =>
                  <Link to={`/vacancy/${item?.id}`} key={item?.id}>
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
                  </Link>
              ) : <></>
            }
          </div>
        </div>
      </div>
    </section> : <section id="notfound">
        <div className="wrapper">
          <div className="notfound">
            <h1>Kechirasiz, bu sahifa topilmadi!</h1>
          </div>
        </div>
      </section>
     }
  </MainLayout>
 )
}
export default Apply