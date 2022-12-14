import { BaseLayout } from "../components/Layouts/BaseLayout"
import { Meta } from "../components/metatags"

export const PrivacyPage = () => {
  return (
    <BaseLayout >
      <Meta
        title="Privacy In The Confessional"
        url={window.location.href }
      />
    </BaseLayout>
  )
}