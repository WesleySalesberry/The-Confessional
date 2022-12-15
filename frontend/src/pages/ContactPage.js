import { BaseLayout } from "../components/Layouts/BaseLayout"
import { Meta } from "../components/metatags"

export const ContactPage = () => {
  return (
    <BaseLayout >
      <Meta
        title="Contact The Confessional"
        url={window.location.href }
      />
    </BaseLayout>
  )
}