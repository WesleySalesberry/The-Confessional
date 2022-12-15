import { useState } from "react"
import Confession from '../api/Confessions'

export const usePostConfessions = () => {
  const [ error, setError ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(null)
  const [ message, setMessage ] = useState([])

  const postConfessions = async (category, body) => {
    setIsLoading(true);

    const postData ={ 
      category: category,
      body: body
    }

    const data = await Confession.confessions.allConfessions(postData)
    
    if(data.success === true){
      setMessage(data.data)
      
    }else{
      setError(data.message)
      
    }
    setIsLoading(false)
  }

  return { postConfessions, message, isLoading, error }
}