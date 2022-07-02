import { useState } from "react"

export const useFetching = (callback: (...args: any) => void) => {
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ error, setError ] = useState<any>(true)

  const fetch = async (...args: any) => {

    try {
      setLoading(true)
      await  callback(...args)
    } catch (e) {
      const error = e as Error
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return [ fetch, loading, error ]
}