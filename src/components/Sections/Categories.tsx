import React, { FC } from 'react'
import 'styles/UI/segmented.scss'
import './Categories.scss'


const Categories: FC = () => {
 return (
   <section id="categories">
     <div className="wrapper">
       <div className="categories">
         <h2>ТАШКИЛОТЛАР</h2>
         <p>400+ ташкилотлар айнан сизни кутмоқда</p>
         <div className="categoriesSegmented">
          <div className="unnecessary-styling">
            <div className="has-segment">
              <input defaultChecked type="radio" className="segment" name="my-segment" id="option-1" />
              <label htmlFor="option-1">УМУМТАЪЛИМ МАКТАБЛАРИ </label>
              <input type="radio" className="segment" name="my-segment" id="option-2" />
              <label htmlFor="option-2">ХУСУСИЙ  МАКТАБЛАРИ</label>
              <input type="radio" className="segment" name="my-segment" id="option-3" />
              <label htmlFor="option-3">МАКТАБЛАР ИНТЕРНАТИ </label>
            </div>
          </div>
         </div>
       </div>
     </div>
   </section>
 )
}
export default Categories