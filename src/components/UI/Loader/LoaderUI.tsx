import {FC, memo} from 'react'
import './LoaderUI.scss'
const LoaderUI: FC = memo(() => {
 return (
  // <div className="loaderWrapper">
  //   <span className="loader" />
  // </div>
  <div className="loader">
    <span className="loader__ring" />
  </div>

 )
})

export default LoaderUI