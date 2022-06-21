import './styles/PhoneInput.scss';
import InputMask from 'react-input-mask';

const PhoneInput = ({ setPhoneValue, phoneValue }) => {

  return (
    <div className="phoneInput" >
      <span className="phoneInput-left">+998</span>
             <InputMask
                mask="99 999 99 99"
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
              />
      </div>
  )
}

export default PhoneInput