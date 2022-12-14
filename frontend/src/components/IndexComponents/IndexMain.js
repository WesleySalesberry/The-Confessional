import { useEffect } from 'react'

import { NoteCard } from '../Cards/NoteCard'
import { BaseLayout } from '../Layouts/BaseLayout'
import { CardLayout } from '../Layouts/CardLayout'

import { useGetConfessions } from '../../Hooks/useGetConfessions'
import { useParams } from 'react-router-dom'

export const IndexMain = () => {
  const { category } = useParams()
  const { getConfessions, confessions, isLoading, error } = useGetConfessions()

  // console.log(category)

  useEffect(() => {
    getConfessions(category);
  },[ category ])

  if(!isLoading){
    return(
      <BaseLayout>
        <CardLayout>
          {
            confessions.map(itm => (
              <NoteCard
                key={itm._id}
                itm={itm}
              />
            ))
          }
        </CardLayout>
      </BaseLayout>
    )
  }else{
    return (
      <BaseLayout>
        <p>Loading Content...</p>
      </BaseLayout>
    )
  }
}