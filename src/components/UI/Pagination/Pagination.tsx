import {FC, memo} from 'react'
import { getPagesArray } from 'utils/pages'
import cl from './Pagination.module.css'

type PaginationProps = {
  totalPages: number,
  changerPage: (paga: number) => void,
  page: number
}

const MyPagination: FC<PaginationProps> = memo(({totalPages,  changerPage, page}) => {

  const pagesArray = getPagesArray(totalPages)
 return (
      <div className={cl.Root}>
          {
            pagesArray.map((item: number) =>
              <button className={page === item ? 'page page_current' : 'page'} onClick={() => changerPage(item)} >{item}</button>
            )
          }
      </div>
 )
})

export default MyPagination