import PhoneInput from 'components/Inputs/PhoneInput'
import SegmentedUI2 from 'components/UI/SegmentedUI2'
import Spiner from 'components/UI/Spiner'
import { FormEvent, useEffect, useState } from 'react'
import { getToken, setToken } from 'utils/tokenStorage'
import { Link, useNavigate } from 'react-router-dom'
import signImg from 'static/images/sign.png'
import './styles/Sign.scss'
import Axios from 'utils/axiosconfig'

const Sign = () => {
  const [ password, setPassword ] = useState<boolean>(true)
  const [ passwordValue1, setPasswordValue1 ] = useState<string>('')
  const [ passwordValue2, setPasswordValue2 ] = useState<string>('')
  const [ phoneValue, setPhoneValue ] = useState('')
  const [ pending, setPending ] = useState<boolean>(false)
  const [ success, setSuccess ] = useState<boolean>(false)
  const navigate = useNavigate()
  const filteredPhone = phoneValue.replace(/ /g,'').replace(/_/g, '')

  const handlePassword = () => {
    setPassword(!password)
  }

  const isValid = (phone: string, password1: string, password2: string) => {
    if (!phone && !password1) {
      return false
    }
    if (phone.length !== 9) {
      return false
    }
    if ( password1.length < 8 ) {
      return false
    }
    if ( password1 !== password2 ) {
      return false
    }
    return true
  }

  const validate = isValid(filteredPhone, passwordValue1, passwordValue2)
  console.log(validate)



  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPending(true)
    if (validate) {
      Axios.post('register/',{
        phone: filteredPhone,
        password: passwordValue1,
        confirm_password: passwordValue2
      })
      .then((data) => {
        if (data) {
          setToken(data?.access);
          setPending(false)
          setSuccess(true)
        }
      })
      .catch(err => console.error("Register error: ", err))
    }
    setPending(false)
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
           <form onSubmit={handleSubmit} className="signForm__field">
             <PhoneInput
                phoneValue={phoneValue}
                setPhoneValue={setPhoneValue}
              />
             <div className="signForm__fieldPassword">
             <input value={passwordValue1} onChange={e => setPasswordValue1(e.target.value)} type={password ? 'password' : 'text'} placeholder='Pasword'/>
              <svg
                onClick={handlePassword}
              width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Stroke 1" fillRule="evenodd" clipRule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89108 11.9994 8.89108C13.7454 8.89108 15.1614 10.3061 15.1614 12.0531Z" stroke={!password ? '#04285B' : '#8D98B5'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Stroke 3" fillRule="evenodd" clipRule="evenodd" d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48888 15.806 4.75089 11.998 4.75089H12.002C8.194 4.75089 4.711 7.48888 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z" stroke={!password ? '#04285B' : '#8D98B5'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
             </div>
             <div className="signForm__fieldPassword">
             <input value={passwordValue2} onChange={e => setPasswordValue2(e.target.value)} type={password ? 'password' : 'text'} placeholder='Pasword'/>
             </div>
             <button disabled={pending ? true : false} className='flex-center press-effect' datatype='blue' type='submit'>
              { pending ? <Spiner/> : "Ro'yxatdan o'tish"  }
             </button>
           </form>
         </div>
         <div className="signImg">
           <img src={signImg} alt="sign" />
         </div>
       </div>
     </div>
   </main>
 )
}
export default Sign