import { PropsWithChildren } from 'react'

import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTittle,
  DashboardPageMain,
} from '@/components/dashboard/page'
import { SettingsSidebar } from './_components/settings-sidebar'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTittle>Configurações</DashboardPageHeaderTittle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <div className="max-w-screen-lg">
          <div className="grid grid-cols-[10rem_1fr] gap-12">
            <SettingsSidebar />
            <div>{children}</div>
          </div>
        </div>
      </DashboardPageMain>
    </DashboardPage>
  )
}
