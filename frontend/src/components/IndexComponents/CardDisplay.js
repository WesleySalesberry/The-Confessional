import { useEffect } from 'react'

import { NoteCard } from '../Cards/NoteCard'
import { BaseLayout } from '../Layouts/BaseLayout'
import { CardLayout } from '../Layouts/CardLayout'

import { useGetConfessions } from '../../Hooks/useGetConfessions'
import { useParams } from 'react-router-dom'

export const CardDisplay = ({ confessions }) => {
  return (
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
  )
}