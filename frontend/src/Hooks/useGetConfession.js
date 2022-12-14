import { useState } from "react"
import Confession from '../api/Confessions'

export const useGetConfession = () => {
  const [ error, setError ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(null)
  const [ confession, setConfession ] = useState([])

  const getConfession = async (id) => {
    setIsLoading(true);

    const data = await Confession.confessions.singleConfession(id)

    if(data.success === true){
      setConfession(data.data)
      
    }else{
      setError(data.message)
      
    }
    setIsLoading(false)
  }

  return { getConfession, confession, isLoading, error }
}