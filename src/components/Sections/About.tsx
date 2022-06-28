import SearchInput from 'components/Inputs/SeachInput'
import { FC } from 'react'
import { motion, Variants } from "framer-motion";
import './styles/About.scss'


const cardVariants: Variants = {
  offscreen: {
    y: 250,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.4,
    }
  }
};

const About: FC = () => {
 return (
  <section id="about">
    <div className="wrapper">
    <SearchInput/>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        className="about">
        <motion.div
          variants={cardVariants}
          className="aboutGrid">
          <div className="aboutGrid__item">
            <div className="aboutGrid__itemImg">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Stroke 1" d="M15.7161 16.2234H8.49609" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Stroke 2" d="M15.7161 12.0369H8.49609" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Stroke 3" d="M11.2511 7.86008H8.49609" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Stroke 4" fillRule="evenodd" clipRule="evenodd" d="M15.9085 2.74979C15.9085 2.74979 8.23149 2.75379 8.21949 2.75379C5.45949 2.77079 3.75049 4.58679 3.75049 7.35679V16.5528C3.75049 19.3368 5.47249 21.1598 8.25649 21.1598C8.25649 21.1598 15.9325 21.1568 15.9455 21.1568C18.7055 21.1398 20.4155 19.3228 20.4155 16.5528V7.35679C20.4155 4.57279 18.6925 2.74979 15.9085 2.74979Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="aboutGrid__itemInfo">
              <span>20 000+</span>
              <h4>Резюмелар сони</h4>
            </div>
          </div>
          <div className="aboutGrid__item">
            <div className="aboutGrid__itemImg">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 21V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V21M19 21H5M19 21H21M19 21H14M5 21H3M5 21H10M14 21V16C14 15.7348 13.8946 15.4804 13.7071 15.2929C13.5196 15.1054 13.2652 15 13 15H11C10.7348 15 10.4804 15.1054 10.2929 15.2929C10.1054 15.4804 10 15.7348 10 16V21M14 21H10M9 7H10M9 11H10M14 7H15M14 11H15" stroke="#1B53F4" strokeWidth="{2}" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="aboutGrid__itemInfo">
            <span>14 000+</span>
              <h4>Ташкилотлар сони</h4>
            </div>
          </div>
          <div className="aboutGrid__item">
            <div className="aboutGrid__itemImg">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Stroke 1" fillRule="evenodd" clipRule="evenodd" d="M9.59151 15.2068C13.2805 15.2068 16.4335 15.7658 16.4335 17.9988C16.4335 20.2318 13.3015 20.8068 9.59151 20.8068C5.90151 20.8068 2.74951 20.2528 2.74951 18.0188C2.74951 15.7848 5.88051 15.2068 9.59151 15.2068Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Stroke 3" fillRule="evenodd" clipRule="evenodd" d="M9.59157 12.0198C7.16957 12.0198 5.20557 10.0568 5.20557 7.63479C5.20557 5.21279 7.16957 3.24979 9.59157 3.24979C12.0126 3.24979 13.9766 5.21279 13.9766 7.63479C13.9856 10.0478 12.0356 12.0108 9.62257 12.0198H9.59157Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Stroke 5" d="M16.4829 10.8816C18.0839 10.6566 19.3169 9.28259 19.3199 7.61959C19.3199 5.98059 18.1249 4.62059 16.5579 4.36359" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Stroke 7" d="M18.5952 14.7322C20.1462 14.9632 21.2292 15.5072 21.2292 16.6272C21.2292 17.3982 20.7192 17.8982 19.8952 18.2112" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </div>
            <div className="aboutGrid__itemInfo">
            <span>25 000+</span>
              <h4>иштирокчилар</h4>
            </div>
          </div>
          <div className="aboutGrid__item">
            <div className="aboutGrid__itemImg">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Stroke 1" d="M11.9951 16.6768V14.1398" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path id="Stroke 2" fillRule="evenodd" clipRule="evenodd" d="M18.19 5.3302C19.88 5.3302 21.24 6.7002 21.24 8.3902V11.8302C18.78 13.2702 15.53 14.1402 11.99 14.1402C8.45 14.1402 5.21 13.2702 2.75 11.8302V8.3802C2.75 6.6902 4.12 5.3302 5.81 5.3302H18.19Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path id="Stroke 4" d="M15.4951 5.32579V4.95979C15.4951 3.73979 14.5051 2.74979 13.2851 2.74979H10.7051C9.48512 2.74979 8.49512 3.73979 8.49512 4.95979V5.32579" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path id="Stroke 6" d="M2.77441 15.483L2.96341 17.992C3.09141 19.683 4.50041 20.99 6.19541 20.99H17.7944C19.4894 20.99 20.8984 19.683 21.0264 17.992L21.2154 15.483" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </div>
            <div className="aboutGrid__itemInfo">
            <span>18 000+</span>
              <h4>Ишга қабул қилинганлар</h4>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
 )
}
export default About