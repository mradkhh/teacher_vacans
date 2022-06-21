import Modal from 'components/Modals/Modal'
import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { isSetToken } from 'utils/tokenStorage'
import './Header.scss'
const Header: FC = () => {

  const [ showModal, setShowModal ] = useState(false)

  const handleClick = () => {
    setShowModal(!showModal)
  }
 return (
   <section id="header">
     <Modal
      state={showModal}
      setState={setShowModal}
      type='signIn'
     />
     <div className="wrapper">
       <div className="header flex">
         <div className="header__logo">
           <h1>LOGO</h1>
         </div>
         <nav className="header__nav">
           <ul className='flex header__nav-links'>
             <li><NavLink to="/">АСОСИЙ</NavLink></li>
             <li><NavLink to="/vacancies">ВАКАНСИЯЛАР</NavLink></li>
             <li><NavLink to="/docs">Xujjatlar</NavLink></li>
           </ul>
         </nav>
         { isSetToken() ? <h1>Token bor</h1> : <button onClick={handleClick} datatype='blue'>Кабинетга кириш</button> }
       </div>
     </div>
   </section>
 )
}
export default Header