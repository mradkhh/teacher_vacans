import PasswordInput from 'components/Inputs/PasswordInput'
import PhoneInput from 'components/Inputs/PhoneInput'
import SegmentedUI2 from 'components/UI/SegmentedUI2'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Modal.scss'

type ModalProps = {
  type: string,
  state: boolean,
  setState: (arg: boolean) => void
}

const Modal: FC<ModalProps> = ({ setState, state, type }) => {
  const [ phoneValue, setPhoneValue ] = useState('')
  type eventType = {
    target: {},
    currentTarget: {}
  }

  const handleClick = (e: eventType) => {
    (e.target === e.currentTarget) && setState(false)
  }

  const handleButtonClick = (e: any) => {
    setState(false)
  }
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
                 <form className="ModalContent__bodyForm">
                    <label htmlFor="phone">Телефон рақам</label>
                    <PhoneInput
                        phoneValue={phoneValue}
                        setPhoneValue={setPhoneValue}
                      />
                    <label htmlFor="password">Парол</label>
                    <PasswordInput/>
                    <div className="more">
                        <Link to="/sign-in/form">Парол есдан чиқдими?</Link>
                        <Link to="/sign-in/form">Рўйхатдан ўтиш</Link>
                    </div>
                    <button datatype='blue'>КИРИШ</button>
                 </form>
              </div>
              <div className="line"></div>
              <div className="ModalContent__footer">
                <h4>Хали рўйхатдан ўтмадингизми:</h4>

              </div>
            </div>
          </div>
        : <></>
 )

}
export default Modal