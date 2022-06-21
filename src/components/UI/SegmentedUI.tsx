import { FC } from 'react'
import './styles/SegmentedUI.scss'

const SegmentedUI: FC = () => {

 return (
    <div className="segmentWrapper">
        <div className="segmentContainer">
          <div className="flight-types">
            <input type="radio" name="flight-type" defaultValue="coach" id="coach"  defaultChecked/>
            <label htmlFor="coach">УМУМТАЪЛИМ МАКТАБЛАРИ</label>
            <input type="radio" name="flight-type" defaultValue="business" id="business"/>
            <label htmlFor="business">ХУСУСИЙ  МАКТАБЛАРИ</label>
            <input type="radio" name="flight-type" defaultValue="first" id="first" />
            <label htmlFor="first">МАКТАБЛАР ИНТЕРНАТИ</label>
          </div>
        </div>
    </div>
 )
}
export default SegmentedUI