import { FC } from 'react'
import './styles/SegmentedUI2.scss'

const SegmentedUI2: FC = () => {
  return (
      <div className="segmentWrapper">
          <div className="segmentContainer">
            <div className="segmented2">
              <input type="radio" name="flight-type" defaultValue="coach" id="coach" defaultChecked/>
              <label htmlFor="coach">Иш изловчи</label>
              <input disabled type="radio" name="flight-type" defaultValue="business" id="business"/>
              <label title='Tez orada' htmlFor="business">Иш берувчи</label>
            </div>
          </div>
      </div>
  )
}
export default SegmentedUI2