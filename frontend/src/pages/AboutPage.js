import { BaseLayout } from "../components/Layouts/BaseLayout"
import { Meta } from "../components/metatags"

export const AboutPage = () => {
  return (
    <BaseLayout >
      <Meta
        title="About The Confessional"
        url={window.location.href }
      />
    </BaseLayout>
  )
}