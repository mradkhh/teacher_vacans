import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from 'static/images/hero.png'
import  './styles/Hero.scss'

const Hero = () => {

  useState(() => {
    window.scrollTo(0,0)
  })
 return (
  <section id="hero">
    <div className="wrapper">
      <div className="hero flex-center">
        <div className="heroImg">
          <img width={400} src={heroImg} alt="" />
        </div>
        <div className="heroContent">
            <h1>Халқчил давлат хизматига очиқ йўл!</h1>
            <p><Link to="/vacancies">14 044</Link>  дан ортиқ бўш иш ўринлари</p>
        </div>
      </div>

    </div>
  </section>
 )
}
export default Hero