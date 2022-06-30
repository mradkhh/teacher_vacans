import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { removeToken } from 'utils/tokenStorage'
import './styles/Profile.scss'

const Profile: FC = () => {
  const [ show, setShow ] = useState<boolean>(false)
  const navigate = useNavigate()
  const handleClick = () => {
    setShow(!show)
  }

  const handeLongoutClick = () => {
    return removeToken(), window.location.reload(),  navigate("/")
  }
 return (
  <div className="profileDropdown">
    <div
      onClick={handleClick}
     className="profileDropdown__avatar flex-center">
      <div className="profileDropdown__avatarImg">
      <img src="https://i.pravatar.cc/32" alt="avatar" />
      </div>
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5999 7.45837L11.1666 12.8917C10.5249 13.5334 9.4749 13.5334 8.83324 12.8917L3.3999 7.45837" stroke="#e8edf1" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
    {
      show ? <div className="profileDropdown__select">
                <Link aria-disabled={true} to="/profile" className="profileDropdown__selectItem">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path id="Stroke 1" fillRule="evenodd" clipRule="evenodd" d="M11.9849 15.3462C8.11731 15.3462 4.81445 15.931 4.81445 18.2729C4.81445 20.6148 8.09636 21.2205 11.9849 21.2205C15.8525 21.2205 19.1545 20.6348 19.1545 18.2938C19.1545 15.9529 15.8735 15.3462 11.9849 15.3462Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path id="Stroke 3" fillRule="evenodd" clipRule="evenodd" d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94782 16.5801 7.40972C16.5801 4.87163 14.523 2.81448 11.9849 2.81448C9.44679 2.81448 7.3887 4.87163 7.3887 7.40972C7.38013 9.93925 9.42394 11.9973 11.9525 12.0059H11.9849Z" stroke="#1B53F4" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Profile <span>Tez orada</span>
                </Link>
                <Link to="/apply">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Stroke 1" d="M15.7161 16.2234H8.49609" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path id="Stroke 2" d="M15.7161 12.0369H8.49609" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path id="Stroke 3" d="M11.2511 7.86008H8.49609" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path id="Stroke 4" fillRule="evenodd" clipRule="evenodd" d="M15.9085 2.74979C15.9085 2.74979 8.23149 2.75379 8.21949 2.75379C5.45949 2.77079 3.75049 4.58679 3.75049 7.35679V16.5528C3.75049 19.3368 5.47249 21.1598 8.25649 21.1598C8.25649 21.1598 15.9325 21.1568 15.9455 21.1568C18.7055 21.1398 20.4155 19.3228 20.4155 16.5528V7.35679C20.4155 4.57279 18.6925 2.74979 15.9085 2.74979Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Arizalarim</Link>
                <Link onClick={handeLongoutClick} to="/">
                  <svg width={24} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41675 6.79995C7.67508 3.79995 9.21675 2.57495 12.5917 2.57495H12.7001C16.4251 2.57495 17.9167 4.06662 17.9167 7.79162V13.225C17.9167 16.95 16.4251 18.4416 12.7001 18.4416H12.5917C9.24175 18.4416 7.70008 17.2333 7.42508 14.2833" stroke="#EF4027" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.4999 10.5H3.0166" stroke="#EF4027" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.87492 7.70825L2.08325 10.4999L4.87492 13.2916" stroke="#EF4027" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Chiqish</Link>
              </div> : <></>
    }
  </div>
 )
}
export default Profile