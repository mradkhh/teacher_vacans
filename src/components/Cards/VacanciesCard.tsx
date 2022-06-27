import { FC } from 'react'
import { motion, Variants } from "framer-motion";
import './styles/VacanciesCard.scss'

type VacanciesCardProps = {
  title: string,
  price: string,
  location: string,
  jobType: string,
  createDate: string,
  deadline: string,
  view: string,
  candidate: string,
  phone: string,
  company: string,
}

const cardVariants: Variants = {
  offscreen: {
    y: 200,
    opacity: 0
  },
  onscreen: {
    y: 50,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const VacanciesCard: FC<VacanciesCardProps> = ({title, company, phone, price, location, jobType, createDate, deadline, view }) => {

  return (
   <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 1 }}
    >
    <motion.div
    variants={cardVariants}
    className="vacanciesCard">
     <motion.div  className="vacanciesCard__header">
       <h3>{title}</h3>
     </motion.div>
     <div className="vacanciesCard__line"></div>
     <div className="vacanciesCard__body">
        <div className='flex-start vacanciesCard__body-item'>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Stroke 1" d="M21.6389 14.3958H17.5906C16.1042 14.3949 14.8993 13.1909 14.8984 11.7045C14.8984 10.218 16.1042 9.01413 17.5906 9.01321H21.6389" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Stroke 3" d="M18.0485 11.6429H17.7369" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Stroke 5" fillRule="evenodd" clipRule="evenodd" d="M7.74766 3H16.3911C19.2892 3 21.6388 5.34951 21.6388 8.24766V15.4247C21.6388 18.3229 19.2892 20.6724 16.3911 20.6724H7.74766C4.84951 20.6724 2.5 18.3229 2.5 15.4247V8.24766C2.5 5.34951 4.84951 3 7.74766 3Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Stroke 7" d="M7.03564 7.53817H12.4346" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {price}</div>
        <div className='flex-start vacanciesCard__body-item'>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14V17M12 14V17M16 14V17M3 21H21M3 10H21M3 7L12 3L21 7H3ZM4 10H20V21H4V10Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {company}</div>
        <div className='flex-start vacanciesCard__body-item'>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.657 16.657L13.414 20.9C13.2284 21.0857 13.0081 21.233 12.7656 21.3336C12.523 21.4341 12.2631 21.4859 12.0005 21.4859C11.738 21.4859 11.478 21.4341 11.2354 21.3336C10.9929 21.233 10.7726 21.0857 10.587 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657V16.657Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {location}</div>
        <div className='flex-start vacanciesCard__body-item'>
            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.5317 11.4724C14.5208 15.4604 15.4258 10.8467 17.9656 13.3848C20.4143 15.8328 21.8216 16.3232 18.7192 19.4247C18.3306 19.737 15.8616 23.4943 7.1846 14.8197C-1.49348 6.144 2.26158 3.67244 2.57397 3.28395C5.68387 0.173846 6.16586 1.58938 8.61449 4.03733C11.1544 6.5765 6.54266 7.48441 10.5317 11.4724Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          {phone}</div>
        <div className='flex-start vacanciesCard__body-item'>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V12L15 15M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {jobType}</div>
     </div>
     <div className="vacanciesCard__line"></div>
     <div className="vacanciesCard__footer">
       <div className="createDate flex-start">
        <svg width={14} height={14} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 5V1M14 5V1M5 9H15M3 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
         {createDate}
         </div>
        <div className="deadline flex-start">
        <svg width={14} height={14} viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9917 20.002H14.9917V18.335C14.9886 17.7627 14.8873 17.1952 14.6921 16.6572C14.6812 16.6279 14.6697 16.6006 14.6562 16.5727C14.4943 16.1311 14.2705 15.7147 13.9917 15.3359L12.5918 13.4687C12.2034 12.9486 11.9929 12.3171 11.9917 11.668V10.6582C11.994 9.86308 12.3096 9.10096 12.8701 8.53706L13.5273 7.87983C14.291 7.11208 14.7815 6.11493 14.9236 5.04145C14.9242 5.02754 14.9316 5.01594 14.9316 5.0019L14.9288 4.98817C14.9636 4.77525 14.9846 4.56031 14.9917 4.34468V2.00195H15.9917C16.2569 2.00195 16.5113 1.8966 16.6988 1.70906C16.8864 1.52152 16.9917 1.26717 16.9917 1.00195C16.9917 0.736737 16.8864 0.482383 16.6988 0.294846C16.5113 0.10731 16.2569 0.00195313 15.9917 0.00195312H1.99171C1.72649 0.00195313 1.47214 0.10731 1.2846 0.294846C1.09707 0.482383 0.991709 0.736737 0.991709 1.00195C0.991709 1.26717 1.09707 1.52152 1.2846 1.70906C1.47214 1.8966 1.72649 2.00195 1.99171 2.00195H2.99171V4.34468C2.99881 4.56031 3.01981 4.77525 3.05458 4.98817L3.05176 5.00195C3.05176 5.01595 3.0592 5.02759 3.05976 5.0415C3.20192 6.11497 3.69245 7.11213 4.45606 7.87988L5.11329 8.53711C5.67378 9.101 5.9894 9.8631 5.9917 10.6582V11.668C5.9904 12.317 5.78015 12.9484 5.39209 13.4687L3.99121 15.3359C3.71245 15.7149 3.48878 16.1314 3.32684 16.5731C3.31354 16.6008 3.30212 16.6277 3.29132 16.6568C3.09618 17.1949 2.99483 17.7625 2.9917 18.335V20.002H1.9917C1.72648 20.002 1.47213 20.1073 1.28459 20.2948C1.09706 20.4824 0.991699 20.7367 0.991699 21.002C0.991699 21.2672 1.09706 21.5215 1.28459 21.7091C1.47213 21.8966 1.72648 22.002 1.9917 22.002H15.9917C16.2569 22.002 16.5113 21.8966 16.6988 21.7091C16.8863 21.5215 16.9917 21.2672 16.9917 21.002C16.9917 20.7367 16.8863 20.4824 16.6988 20.2948C16.5113 20.1073 16.2569 20.002 15.9917 20.002ZM4.9917 4.00195V2.00195H12.9917V4.00195H4.9917ZM5.87012 6.46582C5.72921 6.32426 5.60294 6.16885 5.49323 6.00195H12.4902C12.3805 6.16885 12.2542 6.32426 12.1133 6.46582L11.456 7.12305C10.676 7.8985 10.1758 8.91122 10.0342 10.002H7.94918C7.80755 8.91119 7.30738 7.89843 6.52734 7.12295L5.87012 6.46582ZM6.99219 14.668C7.57081 13.8926 7.91391 12.9671 7.98047 12.002H10.0029C10.0694 12.9672 10.4127 13.8928 10.9917 14.668L11.9918 16.002H5.99133L6.99219 14.668ZM12.9917 20.002H4.9917V18.335C4.99448 18.2235 5.00357 18.1124 5.01892 18.002H12.9645C12.9798 18.1124 12.9889 18.2235 12.9917 18.335V20.002Z" fill="#1B53F4" strokeWidth="1.5"/>
          </svg>
          {deadline}
        </div>
        <div className="view flex-start">
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Iconly/Light/Show">
              <g id="Show">
                <path id="Stroke 1" fillRule="evenodd" clipRule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89108 11.9994 8.89108C13.7454 8.89108 15.1614 10.3061 15.1614 12.0531Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Stroke 3" fillRule="evenodd" clipRule="evenodd" d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48888 15.806 4.75089 11.998 4.75089H12.002C8.194 4.75089 4.711 7.48888 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>
          </svg>
          {view}
        </div>
     </div>
   </motion.div>
   </motion.div>
 )
}
export default VacanciesCard