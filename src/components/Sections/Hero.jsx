import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from 'static/images/hero.png'
import  './Hero.scss'

const Hero = () => {
 return (
  <section id="hero">
    <div className="wrapper">
      <div className="hero flex-center">
        <div className="heroImg">
          <img width={400} src={heroImg} alt="" />
        </div>
        <div className="heroContent">
            <h1>Халқчил давлат хизматига очиқ йўл!</h1>
            <p><Link to="/vacancies">14 044</Link>  дан ортиқ бўш иш ўринлари</p>
        </div>
      </div>
      <div className="heroFooter">
        <div className="heroFooter__searchField">
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.7099 20.2899L17.9999 16.6099C19.44 14.8143 20.1374 12.5352 19.9487 10.2412C19.76 7.94721 18.6996 5.81269 16.9854 4.27655C15.2713 2.74041 13.0337 1.91941 10.7328 1.98237C8.43194 2.04534 6.24263 2.98747 4.61505 4.61505C2.98747 6.24263 2.04534 8.43194 1.98237 10.7328C1.91941 13.0337 2.74041 15.2713 4.27655 16.9854C5.81269 18.6996 7.94721 19.76 10.2412 19.9487C12.5352 20.1374 14.8143 19.44 16.6099 17.9999L20.2899 21.6799C20.3829 21.7736 20.4935 21.848 20.6153 21.8988C20.7372 21.9496 20.8679 21.9757 20.9999 21.9757C21.1319 21.9757 21.2626 21.9496 21.3845 21.8988C21.5063 21.848 21.6169 21.7736 21.7099 21.6799C21.8901 21.4934 21.9909 21.2442 21.9909 20.9849C21.9909 20.7256 21.8901 20.4764 21.7099 20.2899ZM10.9999 17.9999C9.61544 17.9999 8.26206 17.5894 7.11091 16.8202C5.95977 16.051 5.06256 14.9578 4.53275 13.6787C4.00293 12.3996 3.86431 10.9921 4.13441 9.63427C4.4045 8.27641 5.07119 7.02912 6.05016 6.05016C7.02912 5.07119 8.27641 4.4045 9.63427 4.13441C10.9921 3.86431 12.3996 4.00293 13.6787 4.53275C14.9578 5.06256 16.051 5.95977 16.8202 7.11091C17.5894 8.26206 17.9999 9.61544 17.9999 10.9999C17.9999 12.8564 17.2624 14.6369 15.9497 15.9497C14.6369 17.2624 12.8564 17.9999 10.9999 17.9999Z" fill="#1B53F4" />
          </svg>
          <input type="text" placeholder='Излаш'/>
          <button datatype='blue'>Вакансия излаш</button>
        </div>
        <div className="heroFooter__vacancyInfo">
          <div className="heroFooter__vacancyInfo-card flex-start">
                <span>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Stroke 1" d="M15.7161 16.2234H8.49609" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path id="Stroke 2" d="M15.7161 12.0369H8.49609" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path id="Stroke 3" d="M11.2511 7.86008H8.49609" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path id="Stroke 4" fillRule="evenodd" clipRule="evenodd" d="M15.9085 2.74979C15.9085 2.74979 8.23149 2.75379 8.21949 2.75379C5.45949 2.77079 3.75049 4.58679 3.75049 7.35679V16.5528C3.75049 19.3368 5.47249 21.1598 8.25649 21.1598C8.25649 21.1598 15.9325 21.1568 15.9455 21.1568C18.7055 21.1398 20.4155 19.3228 20.4155 16.5528V7.35679C20.4155 4.57279 18.6925 2.74979 15.9085 2.74979Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className='heroFooter__vacancyInfo-cardText'>
                    <h6>Резюмелар сони</h6>
                    <span>2 500</span>
                </div>
          </div>
          <div className="heroFooter__vacancyInfo-card flex-start">
                <span>

                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Stroke 1" d="M11.9951 16.6768V14.1398" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path id="Stroke 2" fillRule="evenodd" clipRule="evenodd" d="M18.19 5.3302C19.88 5.3302 21.24 6.7002 21.24 8.3902V11.8302C18.78 13.2702 15.53 14.1402 11.99 14.1402C8.45 14.1402 5.21 13.2702 2.75 11.8302V8.3802C2.75 6.6902 4.12 5.3302 5.81 5.3302H18.19Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path id="Stroke 4" d="M15.4951 5.32579V4.95979C15.4951 3.73979 14.5051 2.74979 13.2851 2.74979H10.7051C9.48512 2.74979 8.49512 3.73979 8.49512 4.95979V5.32579" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path id="Stroke 6" d="M2.77441 15.483L2.96341 17.992C3.09141 19.683 4.50041 20.99 6.19541 20.99H17.7944C19.4894 20.99 20.8984 19.683 21.0264 17.992L21.2154 15.483" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className='heroFooter__vacancyInfo-cardText'>
                    <h6>Ишга қабул қилинганлар</h6>
                    <span>22 100</span>
                </div>
          </div>
          <div className="heroFooter__vacancyInfo-card flex-start">
                <span>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 21V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V21M19 21H5M19 21H21M19 21H14M5 21H3M5 21H10M14 21V16C14 15.7348 13.8946 15.4804 13.7071 15.2929C13.5196 15.1054 13.2652 15 13 15H11C10.7348 15 10.4804 15.1054 10.2929 15.2929C10.1054 15.4804 10 15.7348 10 16V21M14 21H10M9 7H10M9 11H10M14 7H15M14 11H15" stroke="#1B53F4" strokewidth="1.5" strokelinecap="round" strokelinejoin="round" />
                </svg>
                </span>
                <div className='heroFooter__vacancyInfo-cardText'>
                    <h6>Ташкилотлар сони</h6>
                    <span>12 100</span>
                </div>
          </div>
          <div className="heroFooter__vacancyInfo-card flex-start">
                <span>
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Iconly/Light/3 User">
                      <g id="3 User">
                        <path id="Stroke 1" d="M17.8877 10.8967C19.2827 10.7007 20.3567 9.5047 20.3597 8.0557C20.3597 6.6277 19.3187 5.4437 17.9537 5.2197" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path id="Stroke 3" d="M19.7285 14.2503C21.0795 14.4523 22.0225 14.9253 22.0225 15.9003C22.0225 16.5713 21.5785 17.0073 20.8605 17.2813" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path id="Stroke 5" fillRule="evenodd" clipRule="evenodd" d="M11.8867 14.6638C8.67273 14.6638 5.92773 15.1508 5.92773 17.0958C5.92773 19.0398 8.65573 19.5408 11.8867 19.5408C15.1007 19.5408 17.8447 19.0588 17.8447 17.1128C17.8447 15.1668 15.1177 14.6638 11.8867 14.6638Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path id="Stroke 7" fillRule="evenodd" clipRule="evenodd" d="M11.8869 11.8879C13.9959 11.8879 15.7059 10.1789 15.7059 8.06891C15.7059 5.95991 13.9959 4.24991 11.8869 4.24991C9.7779 4.24991 8.0679 5.95991 8.0679 8.06891C8.0599 10.1709 9.7569 11.8809 11.8589 11.8879H11.8869Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path id="Stroke 9" d="M5.88509 10.8967C4.48909 10.7007 3.41609 9.5047 3.41309 8.0557C3.41309 6.6277 4.45409 5.4437 5.81909 5.2197" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path id="Stroke 11" d="M4.044 14.2503C2.693 14.4523 1.75 14.9253 1.75 15.9003C1.75 16.5713 2.194 17.0073 2.912 17.2813" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </g>
                  </svg>
                </span>
                <div className='heroFooter__vacancyInfo-cardText'>
                    <h6>иштирокчилар сони</h6>
                    <span>114 100</span>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 )
}
export default Hero