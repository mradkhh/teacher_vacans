import {FC, FormEvent, memo, MouseEventHandler, useCallback, useEffect, useMemo, useState} from 'react'
import { useFetching } from 'hooks/useFetching'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'API/services'
import { getToken, setToken } from 'utils/tokenStorage'
import PhoneInput from 'components/UI/Inputs/PhoneInput'
import PasswordInput from 'components/UI/Inputs/PasswordInput'
import SegmentedUI2 from '../Segmented/SegmentedUI2'
import Spiner from "components/UI/Spiner/Spiner";
import A from "components/UI/A/A";
import phoneFilter from "helpers/phoneFilter";
import './styles/Modal.scss'

type ModalProps = {
  state: boolean,
  setState: (arg: boolean) => void
}

const Modal: FC<ModalProps> = memo((props) => {
    const { setState, state } = props
    const [ passwordError, setPasswordError ] = useState<boolean>(false)
    const [ numberError, setNumberError ] = useState<boolean>(false)
    const [ loginError, setLoginError ] = useState<boolean>(false)
    const [ phoneValue, setPhoneValue ] = useState<string>('')
    const [ passwordValue, setPasswordValue ] = useState<string>('')
    const filteredPhone = phoneFilter(phoneValue)
    
    type eventType = {
    target: {},
    currentTarget: {}
  }
  
  const handleClick = useCallback((e: eventType) => {
      (e.target === e.currentTarget) && setState(false)
  }, [setState])

  const handleButtonClick = useCallback(() => {
      setState(false)
  }, [setState])

  const isValid = useMemo(() => (phone: string, password: string) => {
      if (!phone && !password) {
          return false
      }
      if (phone.length !== 9) {
          return false
      }
      if ( password.length < 3 ) {
          return false
      }
      return true
  }, [])

  const validate = isValid(filteredPhone, passwordValue)

  const [ fetchLogin, isLoginLoading, isLoginError ] = useFetching( async () => {
    const res = await Axios.post('me/', {
      phone: filteredPhone,
      password: passwordValue
    })
    setToken(res?.data?.access)
    if (getToken()) {
      window.location.href = '/'
    }
  } )

    const onNumberFocus = useCallback(() => {
        setNumberError(false)
        setLoginError(false)
    }, [setNumberError, setLoginError])

    const onPasswordFocus = useCallback(() => {
        setPasswordError(false)
        setLoginError(false)
    }, [setPasswordError, setLoginError])

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validate) {
      fetchLogin()
    } else if (filteredPhone.length !== 9 || passwordValue.length < 3) {
      if (filteredPhone.length !== 9) {
          setNumberError(true)
      }
      if (passwordValue.length < 3) {
          setPasswordError(true)
      }
    }  else {
        return
    }
  }

  useEffect(() => {
      if (isLoginError) {
          setLoginError(true)
      }
  }, [isLoginError])

 return (
  state ? <div
            onClick={handleClick}
            className="Modal">
            <div className="ModalContent">
              <div className="ModalContent__header flex">
                <h3>КАБИНЕТГА КИРИШ</h3>
                <button
                  onClick={handleButtonClick}
                  >
                  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.29302C4.48053 4.10555 4.73484 4.00023 5 4.00023C5.26516 4.00023 5.51947 4.10555 5.707 4.29302L10 8.58602L14.293 4.29302C14.3852 4.19751 14.4956 4.12133 14.6176 4.06892C14.7396 4.01651 14.8708 3.98892 15.0036 3.98777C15.1364 3.98662 15.2681 4.01192 15.391 4.0622C15.5139 4.11248 15.6255 4.18673 15.7194 4.28062C15.8133 4.37452 15.8875 4.48617 15.9378 4.60907C15.9881 4.73196 16.0134 4.86364 16.0123 4.99642C16.0111 5.1292 15.9835 5.26042 15.9311 5.38242C15.8787 5.50443 15.8025 5.61477 15.707 5.70702L11.414 10L15.707 14.293C15.8892 14.4816 15.99 14.7342 15.9877 14.9964C15.9854 15.2586 15.8802 15.5094 15.6948 15.6948C15.5094 15.8802 15.2586 15.9854 14.9964 15.9877C14.7342 15.99 14.4816 15.8892 14.293 15.707L10 11.414L5.707 15.707C5.5184 15.8892 5.2658 15.99 5.0036 15.9877C4.7414 15.9854 4.49059 15.8802 4.30518 15.6948C4.11977 15.5094 4.0146 15.2586 4.01233 14.9964C4.01005 14.7342 4.11084 14.4816 4.293 14.293L8.586 10L4.293 5.70702C4.10553 5.51949 4.00021 5.26518 4.00021 5.00002C4.00021 4.73486 4.10553 4.48055 4.293 4.29302Z" fill="#1B53F4" />
                  </svg>
                </button>
              </div>
              <div className="line"></div>
                 <SegmentedUI2/>
              <div className="ModalContent__body">
                 <form onSubmit={submit} className="ModalContent__bodyForm">
                    <label style={{display: 'flex'}} htmlFor="phone">Телефон рақам
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
                    <label  style={{display: 'flex'}} htmlFor="password">Парол
                        {
                            passwordError ?
                                <div
                                    style={{
                                        marginLeft: '6px',
                                        color: '#FF725E'
                                    }}
                                    className="report">Parol 6 ta belgidan kam bo'lmasligi kerak!</div>
                                : null
                        }
                    </label>
                    <PasswordInput
                        onFocus={onPasswordFocus}
                        state={passwordValue}
                        setState={setPasswordValue}
                    />
                    <div className="more" >
                        {
                            loginError
                                ?
                                <div style={{color: '#FF725E', marginBottom: '4px'}}>Parol yoki raqam noto'g'ri terilgan</div>
                                : null
                        }
                        <A href="/register" text="Рўйхатдан ўтиш" ></A>
                    </div>
                    <button type='submit' datatype='blue'>
                        { isLoginLoading ? <Spiner/> : 'КИРИШ' }
                        </button>
                 </form>
              </div>

            </div>
          </div>
        : <></>
 )

})
export default Modal