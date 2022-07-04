import { FC, useCallback, useEffect, useState } from 'react'
import { Pagination } from 'antd';
import { Link } from 'react-router-dom'
import MainLayout from 'layouts/MainLayout'
import VacanciesCard from 'components/UI/Cards/VacanciesCard';
import { getToken } from 'utils/tokenStorage'
import LoaderUI from 'components/UI/Loader/LoaderUI';
import dataType from 'types/dataType'
import Axios from 'API/services'
import './styles/Apply.scss'
import { getPageNumber, setPageNumber } from 'utils/pageNumberStorage';
import { useFetching } from 'hooks/useFetching';

const Apply: FC = () => {
  const pageNumber = getPageNumber('apply_page')
  const [ data, setData ] = useState<dataType>()
  const [ page, setPage ] = useState<number>(Number(pageNumber) || 1)
  const [ total, setTotal ] = useState<number>(1)

  const handlePageChange = useCallback((page: number) => {
    setPage(page)
    console.log("Render HandlePageChange...")
    setPageNumber( 'apply_page' , page.toString())
  }, [])

  const [ fetchingApply, isApplyLoading ] = useFetching( async () => {
    const res = await Axios.get(`vacancy/apply_list/?page=${page}&page_size=10`)
    setData(res?.results)
    setTotal(res?.count)
  })
  useEffect(() => {
    window.scrollTo(0, 0)
      fetchingApply()
  }, [page])

 return (
  <MainLayout>
     {
      total ? <section id="apply">
        { isApplyLoading ? <LoaderUI/> : null }
      <div className="wrapper">
        <div className="apply">
          <div className="applyHead">
          <h1>Yuborilgan arizalar</h1>
          <h3>Arizalar soni: {total}</h3>
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
            <h1>Siz birorta ariza yubormagansiz!</h1>
          </div>
        </div>
      </section>
     }
  </MainLayout>
 )
}
export default Apply