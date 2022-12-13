import { NoteCard } from '../Cards/NoteCard'
import { BaseLayout } from '../Layouts/BaseLayout'
import { CardLayout } from '../Layouts/CardLayout'
import CardData from '../Data/CardData.json'
import Col from 'react-bootstrap/esm/Col'

export const IndexMain = () => {
  return (
    <BaseLayout>
      <CardLayout>
        {
          CardData.map(itm => (
            <NoteCard
              key={itm.id}
              itm={itm}
            />
          ))
        }
      </CardLayout>
    </BaseLayout>
  )
}