import { useState } from "react"
import Confession from '../api/Confessions'

export const useGetConfessions = () => {
  const [ error, setError ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(null)
  const [ confessions, setConfessions ] = useState([])

  const getConfessions = async (category) => {
    setIsLoading(true);

    const data = await Confession.confessions.allConfessions(category)
    if(data.success === true){
      setConfessions(data.data)
      
    }else{
      setError(data.message)
      
    }
    setIsLoading(false)
  }

  return { getConfessions, confessions, isLoading, error }
}