import { FC, useEffect, useState } from 'react'
import { Pagination, PaginationProps } from 'antd';
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
  const [ page, setPage ] = useState<number>(1)
  const [ total, setTotal ] = useState<number>()
  console.log(data)

  const handlePageChange: PaginationProps['onChange'] = (page) => {
    setPage(page)
  }
  useEffect(() => {
    if (getToken()) {
      try {
        const getApplyData = async () => {
          const data = await Axios.get(`apply/?page=${page}&page_size=10`)
          setData(data)
        }
        getApplyData()
      } catch (error) {
        console.error(error)
      }
    }
    setLoading(false)
  }, [page])

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
          <div className="pagination flex-center">
                   <Pagination
                   current={page}
                   total={total}
                   onChange={handlePageChange}
                    />
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