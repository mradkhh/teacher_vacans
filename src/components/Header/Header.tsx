import Modal from 'components/Modals/Modal'
import { FC, useState } from 'react'
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Drawer } from 'antd';
import { NavLink } from 'react-router-dom'
import { isSetToken } from 'utils/tokenStorage'
import './Header.scss'
import './hamburger.scss'
const Header: FC = () => {
  const [ toggleNav, setToggleNav ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal)
  }

  const showDrawer = () => {
    setVisible(!visible);
    setToggleNav(!toggleNav)
  };

  const onClose = () => {
    setVisible(false);
  };
 return (
   <section id="header">
     <Modal
      state={showModal}
      setState={setShowModal}
      type='signIn'
     />
      <Drawer title="Basic Drawer" placement="left" onClose={onClose} visible={visible}>
        <nav className="header__mobile-nav">
           <ul className='flex header__mobile-nav-links'>
             <li><NavLink to="/">АСОСИЙ</NavLink></li>
             <li><NavLink to="/vacancies">ВАКАНСИЯЛАР</NavLink></li>
             <li><NavLink to="/docs">Xujjatlar</NavLink></li>
           </ul>

           
         </nav>
      </Drawer>
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
         { isSetToken() ? <h1>Token bor</h1> : <button className='btn-cabinet' onClick={handleClick} datatype='blue'>Кабинетга кириш</button> }
         <button
            onClick={showDrawer}
            className={`mobile-btn hamburger hamburger--slider ${toggleNav ? 'is-active' : ''}`}
            type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
       </div>
     </div>
   </section>
 )
}
export default Header