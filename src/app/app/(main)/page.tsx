import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTittle,
  DashboardPageMain,
} from '@/components/dashboard/page'
import { TodoDataTable } from './_components/todo-data-table'
import { TodoUpsertSheet } from './_components/todo-upsert-sheet'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'

export default async function Page() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTittle>Tarefas</DashboardPageHeaderTittle>
        <DashboardPageHeaderNav>
          <TodoUpsertSheet>
            <Button variant="outline" size="sm">
              <PlusIcon className="mr-3 h-4 w-4" />
              Add todo
            </Button>
          </TodoUpsertSheet>
        </DashboardPageHeaderNav>
      </DashboardPageHeader>
      <DashboardPageMain>
        <TodoDataTable />
      </DashboardPageMain>
    </DashboardPage>
  )
}
