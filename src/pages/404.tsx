import MainLayout from 'layouts/MainLayout'
import {FC, memo} from 'react'
import './styles/NotFound.scss'

const NotFound: FC = memo(() => {
 return (
  <MainLayout>
     <section id="notfound">
        <div className="wrapper">
          <div className="notfound">
            <h1>Kechirasiz, bu sahifa topilmadi!</h1>
          </div>
        </div>
      </section>
  </MainLayout>
 )
})

export default NotFound