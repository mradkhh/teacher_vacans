// import { FC, useEffect, useRef } from "react"

// type observerProps = {
//   ref: any,
//   canLoad: boolean,
//   isLoading: boolean,
//   callback: () => void
// }

// const useObserver: FC<observerProps>  = ({ isLoading, ref, canLoad, callback }) => {
//   const observer = useRef()
//   useEffect(() => {
//     if (isLoading) return
//     if ( observer.current ) observer.current.disconnect()
//     var cb = (entries: any, observer: any) => {
//       if ( entries[0].isIntersecting && canLoad ) {
//         callback()
//       }
//     }
//     observer.current = new IntersectionObserver(cb)
//     observer.current.observe(ref.current)
//   }, [isLoading])
// }

// export default useObserver

// // useObserver(lastElement, (page < totalPages), isVacanciesLoading, () => {
// //   setPage(page + 1)
// // })