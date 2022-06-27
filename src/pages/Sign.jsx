import PhoneInput from 'components/Inputs/PhoneInput'
import SegmentedUI2 from 'components/UI/SegmentedUI2'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import signImg from 'static/images/sign.png'
import 'styles/pages/Sign.scss'


const Sign = () => {
  const [ password, setPassword ] = useState(true)
  const [ phoneValue, setPhoneValue ] = useState('')

  const handlePassword = () => {
    setPassword(!password)
  }
 return (
   <main id="sign">
     <div className="wrapper flex">
       <div className="sign flex">
         <div className="signForm">
            <Link to="/">Qaytish</Link>
           <h1>Kноw релеасе дате фор оур wебсите?</h1>
           <p>Сигнуп то реcеиве упдатес ноw.</p>
           <SegmentedUI2/>
           <form className="signForm__field">
             <PhoneInput
                phoneValue={phoneValue}
                setPhoneValue={setPhoneValue}
              />
             <div className="signForm__fieldPassword">
             <input type={password ? 'password' : 'text'} placeholder='Pasword'/>
              <svg
                onClick={handlePassword}
              width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Stroke 1" fillRule="evenodd" clipRule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89108 11.9994 8.89108C13.7454 8.89108 15.1614 10.3061 15.1614 12.0531Z" stroke={!password ? '#04285B' : '#8D98B5'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Stroke 3" fillRule="evenodd" clipRule="evenodd" d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48888 15.806 4.75089 11.998 4.75089H12.002C8.194 4.75089 4.711 7.48888 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z" stroke={!password ? '#04285B' : '#8D98B5'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
             </div>
             <div className="signForm__fieldPassword">
             <input type={password ? 'password' : 'text'} placeholder='Pasword'/>
              <svg
                onClick={handlePassword}
              width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Stroke 1" fillRule="evenodd" clipRule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89108 11.9994 8.89108C13.7454 8.89108 15.1614 10.3061 15.1614 12.0531Z" stroke={!password ? '#04285B' : '#8D98B5'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Stroke 3" fillRule="evenodd" clipRule="evenodd" d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48888 15.806 4.75089 11.998 4.75089H12.002C8.194 4.75089 4.711 7.48888 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z" stroke={!password ? '#04285B' : '#8D98B5'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
             </div>
             <button datatype='blue' type='submit'>РЎЙХАТДАН ЎТИШ</button>
           </form>
         </div>
         <div className="signImg">
           <img src={signImg} alt="" />
         </div>
       </div>
     </div>
   </main>
 )
}
export default Sign