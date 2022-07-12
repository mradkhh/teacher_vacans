import {FormEvent, memo, useCallback, useEffect, useState} from 'react'
import Axios from 'API/services'
import { Link } from 'react-router-dom'
import {getToken, setToken} from 'utils/tokenStorage'
import { useFetching } from 'hooks/useFetching'
import PhoneInput from 'components/UI/Inputs/PhoneInput'
import useRegisterValidation from 'hooks/useValidation'
import SegmentedUI2 from 'components/UI/Segmented/SegmentedUI2'
import Spiner from 'components/UI/Spiner/Spiner'
import './styles/Sign.scss'

const Sign = memo(() => {
  const [ password, setPassword ] = useState<boolean>(true)
  const [ passwordValue1, setPasswordValue1 ] = useState<string>('')
  const [ passwordValue2, setPasswordValue2 ] = useState<string>('')
  const [ phoneValue, setPhoneValue ] = useState('')
  const [ pending, setPending ] = useState<boolean>(false)
  const [ passwordError, setPasswordError ] = useState<boolean>(false)
  const [ numberError, setNumberError ] = useState<boolean>(false)
  const [ password1Error, setPassword1Error ] = useState<boolean>(false)
  const [ password2Error, setPassword2Error ] = useState<boolean>(false)
  const filteredPhone = phoneValue.replace(/ /g,'').replace(/_/g, '')

  const handlePassword = useCallback(() => {
    setPassword(!password)
  }, [password])

  const validate = useRegisterValidation(filteredPhone, passwordValue1, passwordValue2)

  const [ fetchingRegister, isRegisterLoading, error, errorReport ] = useFetching(async () => {
    const res = await Axios.post('register/', {
      phone: filteredPhone,
        password: passwordValue1,
        confirm_password: passwordValue2
    })
    setToken(res?.data?.access)
    if (getToken()) {
      window.location.href = '/'
    }
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validate) {
      fetchingRegister()
    } else if (filteredPhone.length !== 9 || passwordValue1.length < 6 || passwordValue2.length < 6)  {
      if (filteredPhone.length !== 9) {
        setNumberError(true)
      }
      if (passwordValue1.length < 6) {
        setPassword1Error(true)
      }
      if (passwordValue2.length < 6) {
        setPassword2Error(true)
      }
    } else if (passwordValue1.length !== passwordValue2.length) {
      setPassword2Error(true)
    } else {
      setPassword2Error(true)
    }

  }

  useEffect(() => {
    if (errorReport === "{\"message\":\"phone already taken\"}") {
      alert("Allaqachon ro'yxatdan o'tgansiz!")
      window.location.href = "/"
    }
  }, [errorReport])

  const onNumberFocus = useCallback(() => {
    setNumberError(false)
  }, [setNumberError])

  const onPassword2Focus = useCallback(() => {
    setPassword2Error(false)
  }, [setPassword2Error])

  const onPassword1Focus = useCallback(() => {
    setPassword1Error(false)
  }, [setPassword1Error])

 return (
   <main id="sign">
     <div className="wrapper flex">
       <div className="sign flex">
         <div className="signForm">
            <Link to="/">Bosh sahifa</Link>
           <h1>Kноw релеасе дате фор оур wебсите?</h1>
           <p>Сигнуп то реcеиве упдатес ноw.</p>
           <SegmentedUI2/>
           <form onSubmit={handleSubmit} className="signForm__field">
             <label style={{display: 'flex', margin: '0 0 -8px 8px'}} htmlFor="phone">Телефон рақам
               {
                 numberError ?
                     <div
                         style={{
                           marginLeft: '6px',
                           color: '#FF725E'
                         }}
                         className="report">Raqam noto'g'ri terilgan</div>
                     : null
               }
             </label>
             <PhoneInput
                 onFocus={onNumberFocus}
                 phoneValue={phoneValue}
                 setPhoneValue={setPhoneValue}
              />
             <div className="signForm__fieldPassword">
               <label  style={{display: 'flex', flexWrap: 'wrap' ,  margin: '0 0 4px 8px'}} htmlFor="password">Парол
                 {
                   password1Error ?
                       <div
                           style={{
                             marginLeft: '6px',
                             color: '#FF725E'
                           }}
                           className="report">Parol 6 ta belgidan kam bo'lmasligi kerak</div>
                       : null
                 }
               </label>
             <input
                 onFocus={onPassword1Focus}
                 value={passwordValue1}
                 onChange={e => setPasswordValue1(e.target.value)}
                 type={password ? 'password' : 'text'}
                 placeholder='Password'/>
              <svg
                onClick={handlePassword}
              width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Stroke 1" fillRule="evenodd" clipRule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89108 11.9994 8.89108C13.7454 8.89108 15.1614 10.3061 15.1614 12.0531Z" stroke={!password ? '#04285B' : '#8D98B5'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Stroke 3" fillRule="evenodd" clipRule="evenodd" d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48888 15.806 4.75089 11.998 4.75089H12.002C8.194 4.75089 4.711 7.48888 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z" stroke={!password ? '#04285B' : '#8D98B5'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
             </div>
             <div className="signForm__fieldPassword">
               <label  style={{display: 'flex', margin: '0 0 4px 8px'}} htmlFor="password">Паролni takrorlang
                 {
                   password2Error ?
                       <div
                           style={{
                             marginLeft: '6px',
                             color: '#FF725E'
                           }}
                           className="report">Parol mos emas!</div>
                       : null
                 }
               </label>
             <input
                 onFocus={onPassword2Focus}
                 value={passwordValue2}
                 onChange={e => setPasswordValue2(e.target.value)}
                 type={password ? 'password' : 'text'}
                 placeholder='Password'/>
             </div>
             <button  className='flex-center press-effect' datatype='blue' type='submit'>
              { isRegisterLoading ? <Spiner/> : "Ro'yxatdan o'tish"  }
             </button>
           </form>
         </div>
       </div>
     </div>
   </main>
 )
})

export default Sign