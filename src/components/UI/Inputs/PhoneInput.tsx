import './styles/PhoneInput.scss';
import InputMask from 'react-input-mask';
import {ChangeEvent, FC, memo, useCallback} from 'react';

type PhoneInputProps = {
  phoneValue: string,
  setPhoneValue:(arg: string) => void,
  onFocus:() => void
}

const PhoneInput: FC<PhoneInputProps> = memo((props) => {
  const { setPhoneValue, phoneValue, onFocus } = props
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPhoneValue(e.target.value)
  }, [setPhoneValue])

  return (
    <div className="phoneInput" >
      <span className="phoneInput-left">+998</span>
             <InputMask
                 onFocus={onFocus}
                 mask="99 999 99 99"
                 value={phoneValue}
                 onChange={handleChange}
              />
      </div>
  )
})

export default PhoneInput