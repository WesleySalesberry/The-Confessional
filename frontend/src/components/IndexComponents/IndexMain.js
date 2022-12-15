import { useEffect } from 'react'
import { useParams } from 'react-router-dom'



import { BaseLayout } from '../Layouts/BaseLayout'
import { useGetConfessions } from '../../Hooks/useGetConfessions'
import { CardDisplay } from './CardDisplay'
import { DisplayForm } from '../FormComponent/DisplayForm'


export const IndexMain = () => {
  const { category } = useParams()
  const { getConfessions, confessions, isLoading, error } = useGetConfessions()

  useEffect(() => {
    getConfessions(category);
  },[ category ])

  if(confessions <= 0){
    return (
      <BaseLayout>
        <DisplayForm />
        <p>No Stories to display</p>
      </BaseLayout>
    )
  }

  if(!isLoading){
    return(
      <BaseLayout>
        <DisplayForm />
        <CardDisplay
          confessions={confessions} 
        />
      </BaseLayout>
    )
  }else{
    return (
      <BaseLayout>
        <DisplayForm />
        <p>Loading Content...</p>
      </BaseLayout>
    )
  }
}