import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTittle,
  DashboardPageMain,
} from '@/components/dashboard/page'

export default async function Page() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTittle>Tarefas</DashboardPageHeaderTittle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <h1>Tarefas</h1>
      </DashboardPageMain>
    </DashboardPage>
  )
}
