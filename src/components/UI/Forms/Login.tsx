import { FC } from 'react'
import cl from './styles/Login.module.css'

type LoginProps = {
 props: string
}

const Login: FC<LoginProps> = ({props}) => {
 return (
  <div className={cl.Root}></div>
 )
}
export default Login