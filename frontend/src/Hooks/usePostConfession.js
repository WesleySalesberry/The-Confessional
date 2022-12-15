import { useState } from "react"
import Confession from '../api/Confessions'

export const usePostConfessions = () => {
  const [ error, setError ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(null)
  const [ message, setMessage ] = useState(null)

  const postConfessions = async (category, body) => {
    setIsLoading(true);

    const postData ={ 
      category: category,
      body: body
    }

    console.log(postData)

    const data = await Confession.confessions.postConfession(postData)
    
    if(data.success === true){
      setMessage(data.data)
      
    }else{
      setError(data.message)
      
    }
    setIsLoading(false)
    setTimeout(() => {
      setError('')
      setMessage('')
    }, 3000)
  }

  return { postConfessions, message, isLoading, error }
}