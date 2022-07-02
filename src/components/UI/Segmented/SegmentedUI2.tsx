import { FC } from 'react'
import './styles/SegmentedUI2.scss'

const SegmentedUI2: FC = () => {
  return (
      <div className="segmentWrapper">
          <div className="segmentContainer">
            <div className="segmented2">
              <input type="radio" name="flight-type" defaultValue="coach" id="coach" defaultChecked/>
              <label className='flex-center' htmlFor="coach">Иш изловчи</label>
              <input disabled type="radio" name="flight-type" defaultValue="business" id="business"/>
              <label className='flex-center' title='Tez orada' htmlFor="business">Иш берувчи
                <svg style={{cursor: "wait"}}  width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Stroke 1" fillRule="evenodd" clipRule="evenodd" d="M12 2.75009C17.108 2.75009 21.25 6.89109 21.25 12.0001C21.25 17.1081 17.108 21.2501 12 21.2501C6.891 21.2501 2.75 17.1081 2.75 12.0001C2.75 6.89109 6.891 2.75009 12 2.75009Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path id="Stroke 3" d="M11.9951 8.20419V12.6232" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path id="Stroke 5" d="M11.995 15.7961H12.005" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </label>
            </div>
          </div>
      </div>
  )
}
export default SegmentedUI2