import { auth } from '@/service/auth'
import { ProfileForm } from './_components/form'

export default async function Page() {
  const session = await auth()

  return <ProfileForm defaultValue={session?.user} />
}
