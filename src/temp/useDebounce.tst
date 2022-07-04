// import { RefObject, useCallback, useRef } from "react"

// const useDebounce = (callback: any, delay: number) => {
//   const timer = useRef<RefObject<any> | null>(null)

//   const debounceCallback = useCallback((...args: any) => {
//     if (timer.current) {
//       clearTimeout(timer.current)
//     }

//     timer.current = setTimeout(() => {
//       callback(...args)
//     }, delay)
//   }, [callback, delay])


//   return debounceCallback;
// }

// export default useDebounce