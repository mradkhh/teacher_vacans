import { Pagination, PaginationProps, Select } from 'antd';
import VacanciesCard from 'components/Cards/VacanciesCard';
import LoaderUI from 'components/UI/LoaderUI';
import MainLayout from 'layouts/MainLayout';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dataType } from 'types/dataType';
import Axios from 'utils/axiosconfig';
import './styles/Vacancies.scss';

const Vacancies = () => {
  const { Option } = Select;
  const [ data, setData ] = useState<dataType>()
  const [ loading, setLoading ] = useState<boolean>(true)
  const [ page, setPage ] = useState<number>(1)
  const [ total, setTotal ] = useState<number>()

  const handlePageChange: PaginationProps['onChange'] = (page) => {
    setPage(page)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    const getVacancyList = async () => {
      try {
        const res = await Axios.get(`vacancy/?page=${page}&page_size=10`)
        const data = await res?.results
        setData(data)
        setTotal(res?.count)
      } catch (error) {
        console.error(error)
      }
    }
      getVacancyList()
      setLoading(false)
  }, [page])


 return (
   <MainLayout>
     <section id="vacancies">
      { loading ? <LoaderUI/> : null }
       <div className="wrapper">
        <h2 className="vacancies__title">ВАКАНСИЯЛАР СОНИ: { total } </h2>
         <div className="vacancies flex">
           <div className="vacanciesCategory">
            <h4>Ҳудуд</h4>
           <Select
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
                <Option value="1">Toshkent</Option>
                <Option value="2">Samarqand</Option>
                <Option value="3">Buxoro</Option>
                <Option value="4">Namangan</Option>
                <Option value="5">Xorazim</Option>
                <Option value="6">Qashqadaryo</Option>
                <Option value="7">Surxondaryo</Option>
                <Option value="8">Jizzax</Option>
                <Option value="9">Sirdaryo</Option>
                <Option value="10">Farg'ona</Option>
                <Option value="11">Andijon</Option>
                <Option value="12">Navoi</Option>
                <Option value="13">Qoraqalpog'iston</Option>
              </Select>
              <h4>Ташкилотлар</h4>
           <Select
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
                <Option value="1">Toshkent</Option>
                <Option value="2">Samarqand</Option>
                <Option value="3">Buxoro</Option>
                <Option value="4">Namangan</Option>
                <Option value="5">Xorazim</Option>
                <Option value="6">Qashqadaryo</Option>
                <Option value="7">Surxondaryo</Option>
                <Option value="8">Jizzax</Option>
                <Option value="9">Sirdaryo</Option>
                <Option value="10">Farg'ona</Option>
                <Option value="11">Andijon</Option>
                <Option value="12">Navoi</Option>
                <Option value="13">Qoraqalpog'iston</Option>
              </Select>
              <h4>Туман/шаҳар</h4>
           <Select
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
                <Option value="1">Toshkent</Option>
                <Option value="2">Samarqand</Option>
                <Option value="3">Buxoro</Option>
                <Option value="4">Namangan</Option>
                <Option value="5">Xorazim</Option>
                <Option value="6">Qashqadaryo</Option>
                <Option value="7">Surxondaryo</Option>
                <Option value="8">Jizzax</Option>
                <Option value="9">Sirdaryo</Option>
                <Option value="10">Farg'ona</Option>
                <Option value="11">Andijon</Option>
                <Option value="12">Navoi</Option>
                <Option value="13">Qoraqalpog'iston</Option>
              </Select>
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
                   total={total}
                   onChange={handlePageChange}
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