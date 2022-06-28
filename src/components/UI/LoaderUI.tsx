import { FC } from 'react'
import './styles/LoaderUI.scss'
const LoaderUI: FC = () => {
 return (
  // <div className="loaderWrapper">
  //   <span className="loader" />
  // </div>
  <div className="loader">
    <span className="loader__ring" />
  </div>

 )
}

export default LoaderUI