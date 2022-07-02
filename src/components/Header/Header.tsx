import { FC, useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Drawer } from 'antd';
import { isSetToken } from 'utils/tokenStorage'
import './hamburger.scss'
import './Header.scss'
import MyModal from 'components/UI/Modals/MyModal';
import Modal from 'components/UI/Modals/Modal';
import Navbar from 'components/UI/Navbar/Navbar';
import Profile from 'components/UI/DropDown/Profile';
import { TestContext } from 'context';



const Header: FC = () => {
  const [ toggleNav, setToggleNav ] = useState<boolean>(false)
  const [ showModal, setShowModal ] = useState<boolean>(false)
  const [ visible, setVisible ] = useState<boolean>(false);
  const [ modal, setModal ] = useState(false)

  const  { isAuth } = useContext(TestContext)
  console.log(isAuth)

  const handleClick = () => {
    setModal(true)
    setShowModal(true)
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
     <MyModal
      visible={modal}
      setVisible={setModal}
     >
      <h1>This is Modal glass</h1>
     </MyModal>
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