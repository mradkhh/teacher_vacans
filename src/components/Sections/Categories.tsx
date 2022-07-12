import SegmentedUI from 'components/UI/Segmented/SegmentedUI'
import React, {FC, memo} from 'react'
import './styles/Categories.scss'


const Categories: FC = memo(() => {
 return (
   <section id="categories">
     <div className="wrapper">
       <div className="categories">
         <h2>ТАШКИЛОТЛАР</h2>
         <p>400+ ташкилотлар айнан сизни кутмоқда</p>
         <SegmentedUI/>
       </div>
     </div>
   </section>
 )
})
export default Categories