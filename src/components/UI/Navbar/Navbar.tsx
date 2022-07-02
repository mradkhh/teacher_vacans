import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar: FC = () => {
 return (
  <nav className="header__nav">
    <ul className='flex header__nav-links'>
      <li><NavLink to="/">АСОСИЙ</NavLink></li>
      <li><NavLink to="/vacancies">ВАКАНСИЯЛАР</NavLink></li>
    </ul>
  </nav>
 )
}
export default Navbar