import Modal from 'components/Modals/Modal'
import { FC, useState } from 'react'
import { Drawer } from 'antd';
import { NavLink } from 'react-router-dom'
import { isSetToken } from 'utils/tokenStorage'
import './Header.scss'
import './hamburger.scss'
import Profile from 'components/DropDown/Profile';
const Header: FC = () => {
  const [ toggleNav, setToggleNav ] = useState<boolean>(false)
  const [ showModal, setShowModal ] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false);

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
     />
      <Drawer title="Basic Drawer" placement="left" onClose={onClose} visible={visible}>
        <nav className="header__mobile-nav">
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
         <nav className="header__nav">
           <ul className='flex header__nav-links'>
             <li><NavLink to="/">АСОСИЙ</NavLink></li>
             <li><NavLink to="/vacancies">ВАКАНСИЯЛАР</NavLink></li>
           </ul>
         </nav>
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