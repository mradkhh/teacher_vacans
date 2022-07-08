import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pagination, Select } from 'antd';
import { getPageNumber, setPageNumber } from 'utils/pageNumberStorage';
import dataType from 'types/dataType';
import { useFetching } from 'hooks/useFetching';
import { getPageCount } from 'utils/pages';
import Axios from 'API/services';
import VacanciesCard from 'components/UI/Cards/VacanciesCard';
import LoaderUI from 'components/UI/Loader/LoaderUI';
import MainLayout from 'layouts/MainLayout';
import './styles/Vacancies.scss';

const Vacancies: FC = () => {
  const { Option } = Select;
  const pageNumber = getPageNumber('vacancies_page')
  const [ data, setData ] = useState<dataType>()
  const [ regionData, setRegionData ] = useState<any[]>()
  const [ organizationData, setOrganizationData ] = useState<any[]>()
  const [ page, setPage ] = useState<number>(Number(pageNumber) || 1)
  const [ limit, setLimit ] = useState<number>(10)
  const [ totalCount, setTotalCount ] = useState<number>(1)
  const [ totalPages, setTotalPages ] = useState<number>(1)
  const [ regionId, setRegionId ] = useState<number>()
  const [ organizationId, setOrganizationId ] = useState<number>()
  const [ resetFilter, setResetFilter ] = useState<boolean>(false)

  // Custom hook
  const [ fetchVacancies, isVacanciesLoading, reportVacanciesError ] = useFetching(async () => {
    const res = await Axios.get(`vacancy/?page=${page}&page_size=${limit}&region=${regionId ? regionId : ''}&organization=${organizationId ? organizationId : '' }`)
        const data = await res?.results
        setData(data)
        setTotalCount(res?.count)
        setTotalPages( await getPageCount(totalCount, limit))
  })

  const [ fetchRegions, isRegionLoading, reportRegionError ] = useFetching( async () => {
    const res = await Axios.get(`region/`)
    const data = res?.results
    const next = res?.next
    setRegionData(data)
    console.log(res)
  } )

  const [ fetchOrganization, isOrganizationLoading ] = useFetching( async () => {
    const res = await Axios.get('organization/')
    const data = res?.results
    setOrganizationData(data)
    const nextOrganization = res?.next
  } )

  const changerPage = (page: number) => {
    setPage(page)
    setPageNumber( 'vacancies_page' , page.toString())
  }

  const handleFetchRegion = () => {
    fetchRegions()
  }

  const handleRegionSelectChange = (value: number) => {
    setRegionId(value)
  }
  const handleFetchOrganization = () => {
    fetchOrganization()
  }

  const handleOrganizationSelectChange = (value: number) => {
    setOrganizationId(value)
  }

  const handlerResetFilter = () => {
    setOrganizationId(undefined)
    setRegionId(undefined)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchVacancies()
  }, [page, regionId, organizationId])

 return (
   <MainLayout>
     <section id="vacancies">
      { isVacanciesLoading ? <LoaderUI/> : null }
       <div className="wrapper">
        <h2 className="vacancies__title">ВАКАНСИЯЛАР СОНИ: { totalCount } </h2>
         <div className="vacancies flex">
           <div className="vacanciesCategory">
            <h4>HUDUD</h4>
           <Select
                value={regionId}
                onChange={handleRegionSelectChange}
                onFocus={handleFetchRegion}
                showSearch
                allowClear
                style={{ width: '100%' }}
                placeholder="Qidirish"
                optionFilterProp="children"
                filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
                filterSort={(optionA, optionB) =>
                  (optionA!.children as unknown as string)
                    .toLowerCase()
                    .localeCompare((optionB!.children as unknown as string).toLowerCase())
                }
              >
                {
                  regionData?.map(region =>
                    <Option value={region.id}>{region?.name}</Option>
                    )
                }

              </Select>
              <h4>ТASHKILOT</h4>
           <Select
                value={organizationId}
                onFocus={handleFetchOrganization}
                onChange={handleOrganizationSelectChange}
                showSearch
                style={{ width: '100%' }}
                placeholder="Qidirish"
                optionFilterProp="children"
                filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
                filterSort={(optionA, optionB) =>
                  (optionA!.children as unknown as string)
                    .toLowerCase()
                    .localeCompare((optionB!.children as unknown as string).toLowerCase())
                }
              >
                {
                  organizationData?.map(organization =>
                    <Option value={organization?.id}>{organization?.name}</Option>
                    )
                }

              </Select>
              <button onClick={handlerResetFilter} type='button' datatype='blue' style={{width: '100%'}}>Tozalash</button>
           </div>
           <div
              className="vacanciesItems">
                   {
                    data?.map((item: any) =>
                        <Link to={`/vacancy/${item?.id}`}key={item?.id}>
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
                   <Pagination
                   current={page}
                   total={totalCount}
                   onChange={changerPage}
                    />
              </div>
           </div>
         </div>
       </div>
     </section>
   </MainLayout>
 )
}
export default Vacancies