export default function HomeLayout({
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
