import { NoteCard } from '../Cards/NoteCard'
import { CardLayout } from '../Layouts/CardLayout'

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