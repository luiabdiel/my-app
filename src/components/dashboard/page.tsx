import { cn } from '@/lib/utils'

export type DashboardPageGenericProps<T = any> = {
  children: React.ReactNode
  className?: string
} & T

export function DashboardPage({
  className,
  children,
}: DashboardPageGenericProps) {
  return <section className={cn(['h-screen', className])}>{children}</section>
}

export function DashboardPageHeader({
  className,
  children,
}: DashboardPageGenericProps) {
  return (
    <header
      className={cn([
        'flex h-12 items-center justify-between border-b border-border px-6',
        className,
      ])}
    >
      {children}
    </header>
  )
}

export function DashboardPageHeaderTittle({
  className,
  children,
}: DashboardPageGenericProps) {
  return (
    <span
      className={cn(['text-xs uppercase text-muted-foreground', className])}
    >
      {children}
    </span>
  )
}

export function DashboardPageHeaderNav({
  className,
  children,
}: DashboardPageGenericProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}

export function DashboardPageMain({
  className,
  children,
}: DashboardPageGenericProps) {
  return <main className={cn(['p-6', className])}>{children}</main>
}
