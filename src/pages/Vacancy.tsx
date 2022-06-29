import { FC, useEffect, useState } from 'react'
import MainLayout from 'layouts/MainLayout'
import { motion, Variants } from "framer-motion";
import 'styles/pages/Vacancy.scss'
import { useParams } from 'react-router-dom';
import NewVacancies from 'components/Sections/NewVacancies';
import Axios from 'utils/axiosconfig';

const Vacancy: FC = () => {

  const { id } = useParams()

  type stateType = {
    organization: any,
    finished_time: any,
    liabilities: string,
    price: number,
    requirement: string,
    title: string,
    type_of_employment: string,
    type_of_work: string,
    viewer: number,
    work_experience: number,
    working_conditions: string
  }

  const [ data, setData ] = useState<stateType>()
  console.log(data)
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
        duration: 0.4
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
    Axios.get(`vacancy/${id}`)
    .then((data) => {
      console.log(data)
      setData(data)
    })
    .catch(err => console.error(err))
  }, [])

  const handleApply = () => {
    Axios.post("application/", {
      vacancies: Number(id)
    })
    .then((data) => {
      console.log("Apply data", data)
      setData(data)
    })
    .catch(err => console.error(err))
  }

 return (
   <MainLayout>
     <section id="vacancy">
     <div className="wrapper">
      {
        data ? <div  className="vacancy flex-start">
          <div className="vacancyLongInfo">
            <div className="vacancyLongInfo__header flex">
              <div className="vacancyLongInfo__headerInfo">
                <div className="vacancyLongInfo__headerInfo-head">
                 <h2>{ data?.title }</h2>
                 <div className='vacancyLongInfo__headerInfoSubtitle flex-start'>
                   <svg width={16} height={16} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M8 14V17M12 14V17M16 14V17M3 21H21M3 10H21M3 7L12 3L21 7H3ZM4 10H20V21H4V10Z" stroke="#1B53F4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                   </svg>
                    { data?.organization?.name }
                 </div>
                </div>
                <div className="vacancyLongInfo__headerInfo-body">
                   <div className='vacancyLongInfo__headerInfoItem'>
                     <span>Манзил</span>
                     <h5>{data?.organization?.region_parent + ' ' + data?.organization?.region_name}</h5>
                   </div>
                   <div className='vacancyLongInfo__headerInfoItem'>
                     <span>Телефон рақам</span>
                     <h5>+998{data?.organization?.phone}</h5>
                   </div>
                   <div className='vacancyLongInfo__headerInfoItem'>
                     <span>Электрон почта</span>
                     <h5></h5>
                   </div>
                </div>
                <div className="vacancyLongInfo__headerInfo-footer">
                 <div className='flex-start'>
                     <svg width={13} height={13} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M6 5V1M14 5V1M5 9H15M3 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  { data?.finished_time }
                 </div>
                 <div className='flex-start'>
                   <svg width={16} height={16} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path id="Stroke 1" fillRule="evenodd" clipRule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89108 11.9994 8.89108C13.7454 8.89108 15.1614 10.3061 15.1614 12.0531Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                           <path id="Stroke 3" fillRule="evenodd" clipRule="evenodd" d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48888 15.806 4.75089 11.998 4.75089H12.002C8.194 4.75089 4.711 7.48888 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                     {data?.viewer}
                 </div>
                </div>
              </div>
            </div>
            <div className="vacancyLongInfo__body">
              <div className="vacancyLongInfo__bodyItem">
                <h3>МАЛАКАВИЙ ТАЛАБЛАР</h3>
                <p>{data?.requirement}</p>
              </div>
              <div className="vacancyLongInfo__bodyItem">
                <h3>ЛАВОЗИМИЙ МАЖБУРИЯТЛАР</h3>
                <p>{data?.liabilities}</p>
              </div>
              <div className="vacancyLongInfo__bodyItem">
                <h3>ИШ ШАРОИТЛАРИ</h3>
                <p>{data?.working_conditions}</p>
              </div>
            </div>
          </div>
          <ul className="vacancyShortInfo">
               <li className='vacancyShortInfo-item flex-start'>
                 <span>
                   <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g id="Iconly/Light/Wallet">
                       <g id="Wallet">
                         <path id="Stroke 1" d="M21.6389 14.3958H17.5906C16.1042 14.3949 14.8993 13.1909 14.8984 11.7045C14.8984 10.218 16.1042 9.01413 17.5906 9.01321H21.6389" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                         <path id="Stroke 3" d="M18.0485 11.6429H17.7369" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                         <path id="Stroke 5" fillRule="evenodd" clipRule="evenodd" d="M7.74766 3H16.3911C19.2892 3 21.6388 5.34951 21.6388 8.24766V15.4247C21.6388 18.3229 19.2892 20.6724 16.3911 20.6724H7.74766C4.84951 20.6724 2.5 18.3229 2.5 15.4247V8.24766C2.5 5.34951 4.84951 3 7.74766 3Z" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                         <path id="Stroke 7" d="M7.03564 7.53817H12.4346" stroke="#1B53F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                       </g>
                     </g>
                   </svg>
                 </span>
                 <div className='vacancyShortInfo-itemInfo'>
                     <h6>Маош</h6>
                     <span>{data?.price} so'm</span>
                 </div>
               </li>
               <li className='vacancyShortInfo-item flex-start'>
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
                 <div className='vacancyShortInfo-itemInfo'>
                     <h6>Номзодлар сони</h6>
                     <span>45</span>
                 </div>
               </li>
               <li className="vacancyShortInfo-item flex-start">
                 <span><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <g id="Iconly/Light/Time Square">
                         <g id="Time Square">
                           <path id="Stroke 1" fillRule="evenodd" clipRule="evenodd" d="M16.3345 2.75021H7.66549C4.64449 2.75021 2.75049 4.88921 2.75049 7.91621V16.0842C2.75049 19.1112 4.63449 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91621C21.2505 4.88921 19.3645 2.75021 16.3345 2.75021Z" stroke="#FF725E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                           <path id="Stroke 3" d="M15.391 14.0177L12 11.9947V7.63373" stroke="#FF725E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                         </g>
                       </g>
                     </svg>
                 </span>
                 <div className='vacancyShortInfo-itemInfo'>
                   <h6>Қабул ёпилишига қолган вақт</h6>
                   <div>9 кун <span>26 июн 2022</span></div>
                 </div>
               </li>
               <button onClick={handleApply} datatype='blue'>Ариза юбориш</button>
          </ul>
        </div>
           : <></>
      }
       <NewVacancies/>
     </div>
   </section>

   </MainLayout>
 )
}
export default Vacancy