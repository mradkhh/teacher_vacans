import { ChangeEvent, FC, useState } from 'react'
import './styles/PasswordInput.scss'

type stateProps = {
    state: string,
    setState: (arg: string) => void
}

const PasswordInput: FC<stateProps> = (props) => {
  const [ password, setPassword ] = useState<boolean>(true)
  const { state, setState } = props

  const handlePassword = () => {
    setPassword(!password)
  }

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }
 return (
  <div className="passwordInput__field">
      <input type={password ? 'password' : 'text'} value={state} onFocus={handleFocus} placeholder='Pasword'/>
      <svg
        onClick={handlePassword}
      width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Stroke 1" fillRule="evenodd" clipRule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89108 11.9994 8.89108C13.7454 8.89108 15.1614 10.3061 15.1614 12.0531Z" stroke={!password ? '#1B53F4' : '#8D98B5'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Stroke 3" fillRule="evenodd" clipRule="evenodd" d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48888 15.806 4.75089 11.998 4.75089H12.002C8.194 4.75089 4.711 7.48888 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z" stroke={!password ? '#1B53F4' : '#8D98B5'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
  </div>
 )
}
export default PasswordInput