import { Footer } from '@/components/footer'

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="">
      <div className="">{children}</div>
    </section>
  )
}
