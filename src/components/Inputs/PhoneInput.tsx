import './styles/PhoneInput.scss';
import InputMask from 'react-input-mask';
import { ChangeEvent, FC } from 'react';

type PhoneInputProps = {
  phoneValue: string,
  setPhoneValue:(arg: string) => void
}

const PhoneInput: FC<PhoneInputProps> = (props) => {
  const { setPhoneValue, phoneValue } = props
  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneValue(e.target.value)
  }

  return (
    <div className="phoneInput" >
      <span className="phoneInput-left">+998</span>
             <InputMask
                mask="99 999 99 99"
                value={phoneValue}
                onFocus={handleFocus}
              />
      </div>
  )
}

export default PhoneInput