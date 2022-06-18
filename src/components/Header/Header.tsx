import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
const Header: FC = () => {
 return (
   <section id="header">
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
         <button datatype='blue'>Kabinetga kirish</button>
       </div>
     </div>
   </section>
 )
}
export default Header