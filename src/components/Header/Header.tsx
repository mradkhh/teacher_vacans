import { FC, useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Drawer } from 'antd';
import { isSetToken } from 'utils/tokenStorage'
import Modal from 'components/UI/Modals/Modal';
import Navbar from 'components/UI/Navbar/Navbar';
import Profile from 'components/UI/DropDown/Profile';
import './hamburger.scss'
import './Header.scss'

const Header: FC = () => {
  const [ toggleNav, setToggleNav ] = useState<boolean>(false)
  const [ showModal, setShowModal ] = useState<boolean>(false)
  const [ visible, setVisible ] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setShowModal(true)
  }, [])

  const showDrawer = useCallback(() => {
    setVisible(!visible);
    setToggleNav(!toggleNav)
  }, [])

  const onClose = useCallback(() => {
    setVisible(false);
  }, [])
 return (
   <section id="header">
     <Modal
      state={showModal}
      setState={setShowModal}
     />
      <Drawer title="Basic Drawer" placement="left" onClose={onClose} visible={visible}>
      <nav className=".header__mobile-nav">
        <ul className='flex header__mobile-nav-links'>
          <li><NavLink to="/">АСОСИЙ</NavLink></li>
          <li><NavLink to="/vacancies">ВАКАНСИЯЛАР</NavLink></li>
        </ul>
      </nav>
         { isSetToken() ? <></> : <button className='btn-cabinet' onClick={handleClick} datatype='blue'>Кабинетга кириш</button> }
      </Drawer>
     <div className="wrapper">
       <div className="header flex">
         <div className="header__logo">
           <h1>LOGO</h1>
         </div>
        <Navbar/>
         { isSetToken() ? <Profile/> : <button className='btn-cabinet' onClick={handleClick} datatype='blue'>Кабинетга кириш</button> }
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